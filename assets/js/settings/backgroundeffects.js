const container = document.getElementById("bg-effects");
const select = document.getElementById("effects");

if (!container) {
    console.error("Missing #bg-effects element.");
}

const brainrotImages = [
    "/assets/images/brainrot1.png",
    "/assets/images/brainrot2.png",
    "/assets/images/brainrot3.png",
    "/assets/images/brainrot4.png"
];

const eggs = [];
const squares = [];

const mysteryAudioPath = "/assets/audio/mystery.mp3";

let mysteryAudio = null;

let animationId = null;
let spawnInterval = null;

const isSettingsPage = window.location.pathname.includes("settings.html");



if (select) {

    select.value = localStorage.getItem("backgroundEffect") || "default";

    loadEffect(select.value);

    select.addEventListener("change", () => {

        localStorage.setItem("backgroundEffect", select.value);

        loadEffect(select.value);

    });

} else {

    loadEffect(localStorage.getItem("backgroundEffect") || "default");

}



window.addEventListener("resize", () => {

    eggs.forEach(egg => {

        if (egg.x > window.innerWidth - egg.size) {

            egg.x = window.innerWidth - egg.size;

        }

    });

});



function clearEffects() {

    clearInterval(spawnInterval);

    cancelAnimationFrame(animationId);


    spawnInterval = null;
    animationId = null;


    eggs.length = 0;

    squares.length = 0;



    if (mysteryAudio) {

        mysteryAudio.pause();

        mysteryAudio.currentTime = 0;

        mysteryAudio.remove();

        mysteryAudio = null;

    }



    if (container) {

        container.innerHTML = "";

    }

}



function loadEffect(effect) {

    clearEffects();



    switch(effect) {


        case "squares":

            createSquares();

            break;



        case "eggs":

            startRain("/assets/images/egg.png");

            break;



        case "mystery":

            startMystery();

            break;


    }

}



function createSquares() {


    for(let i = 0; i < 7; i++) {


        const square = document.createElement("div");

        square.className = "bg-square";



        const size = 90 + Math.random() * 140;


        square.style.width = size + "px";

        square.style.height = size + "px";



        squares.push({

            el: square,


            x:
            window.innerWidth / 2 +
            (Math.random() - 0.5) * 850,


            y:
            window.innerHeight / 2 +
            (Math.random() - 0.5) * 300,


            offset: Math.random() * 5000,


            speed:
            0.0005 +
            Math.random() * 0.0007,


            rotate:
            Math.random() * 25 - 12

        });



        container.appendChild(square);

    }


    animateSquares();

}



function animateSquares(time = 0) {


    squares.forEach(square => {


        const movement =
        time * square.speed +
        square.offset;



        square.el.style.transform =

        `
        translate(
            ${square.x + Math.sin(movement) * 50}px,
            ${square.y + Math.cos(movement * 1.2) * 40}px
        )
        rotate(${square.rotate}deg)
        `;


    });



    animationId =
    requestAnimationFrame(animateSquares);

}



function startRain(image) {


    spawnObject(image);


    spawnInterval = setInterval(() => {

        spawnObject(image);

    },1200);


    animate();

}



function startMystery() {


    if (!isSettingsPage) {

        playMysteryAudio();

    }



    spawnObject(randomBrainrot());



    spawnInterval = setInterval(() => {


        spawnObject(randomBrainrot());


    },900);



    animate();

}



function playMysteryAudio() {


    if (mysteryAudio || isSettingsPage) return;



    mysteryAudio = document.createElement("audio");


    mysteryAudio.src = mysteryAudioPath;


    mysteryAudio.loop = true;


    mysteryAudio.volume = 0.35;


    mysteryAudio.preload = "auto";



    document.body.appendChild(mysteryAudio);



    const startAudio = () => {


        mysteryAudio.play().catch(() => {

            console.log("Audio blocked.");

        });


        document.removeEventListener(
            "click",
            startAudio
        );


        document.removeEventListener(
            "keydown",
            startAudio
        );


    };



    mysteryAudio.play().catch(() => {


        document.addEventListener(
            "click",
            startAudio,
            { once:true }
        );


        document.addEventListener(
            "keydown",
            startAudio,
            { once:true }
        );


    });

}



function randomBrainrot() {

    return brainrotImages[
        Math.floor(
            Math.random() *
            brainrotImages.length
        )
    ];

}



function spawnObject(src) {


    const img = document.createElement("img");


    img.src = src;


    img.className = "effect-object";



    const size =
    40 + Math.random() * 120;



    img.style.width =
    size + "px";



    container.appendChild(img);



    eggs.push({

        el: img,


        x:
        Math.random() *
        (window.innerWidth - size),


        y:
        -size -
        Math.random() * 200,


        size,


        velocity: 0,


        horizontal:
        (Math.random() - 0.5) * 1.2,


        rotation:
        Math.random() * 50 - 25,


        spin:
        Math.random() * 0.8 - 0.4,


        grounded:false,


        restingTime:0

    });

}


function animate() {


    const gravity = 0.045;



    eggs.forEach(egg => {


        if(!egg.grounded) {


            egg.velocity += gravity;


            egg.y += egg.velocity;


            egg.x += egg.horizontal;


            egg.rotation += egg.spin;



            egg.horizontal *= 0.992;


            egg.spin *= 0.995;



            let floor =
            window.innerHeight - egg.size;



            eggs.forEach(other => {


                if(other === egg) return;



                const dx =
                (egg.x + egg.size / 2) -
                (other.x + other.size / 2);



                const dy =
                (egg.y + egg.size / 2) -
                (other.y + other.size / 2);



                const distance =
                Math.sqrt(dx * dx + dy * dy);



                const minDistance =
                (egg.size + other.size) / 2;



                if(distance < minDistance) {


                    const push =
                    (minDistance - distance) * 0.08;



                    egg.x +=
                    (dx / distance) * push;



                    egg.horizontal +=
                    (dx / distance) * 0.08;


                }



                if(
                    other.grounded &&
                    egg.x + egg.size > other.x &&
                    egg.x < other.x + other.size &&
                    egg.y + egg.size >= other.y
                ) {


                    floor =
                    Math.min(
                        floor,
                        other.y - egg.size
                    );

                }


            });



            if(egg.y >= floor) {


                egg.y = floor;


                egg.velocity *= -0.08;



                egg.horizontal +=
                (Math.random() - 0.5) * 0.25;



                egg.spin +=
                egg.horizontal * 0.15;



                if(
                    Math.abs(egg.velocity) < 0.05 &&
                    Math.abs(egg.horizontal) < 0.03
                ) {


                    egg.grounded = true;


                    egg.el.classList.add("landed");


                }


            }


        }



        egg.el.style.transform =

        `
        translate(${egg.x}px, ${egg.y}px)
        rotate(${egg.rotation}deg)
        `;


    });



    animationId =
    requestAnimationFrame(animate);

}
