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

const isSettingsPage = window.location.pathname.replace(/\/$/, "").endsWith("settings") ||
                       window.location.pathname.endsWith("settings.html");


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

        case "default":
            createLines();
            break;

        case "waves":
            createWaves();
            break;

        case "mystery":
            startMystery();
            break;

        case "none":
            break;

    }

}


function createLines() {

    const lines = document.createElement("div");
    lines.className = "lines-effect";

    container.appendChild(lines);

}


function createWaves() {
    container.innerHTML = `
        <div class="wave-container">
            <svg class="wave wave1" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="rgba(201,49,49,.18)"
                    d="M0,224L80,234.7C160,245,320,267,480,277.3C640,288,800,288,960,272C1120,256,1280,224,1360,208L1440,192V320H0Z"/>
            </svg>

            <svg class="wave wave2" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="rgba(201,49,49,.35)"
                    d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,224C1120,245,1280,267,1360,277.3L1440,288V320H0Z"/>
            </svg>

            <svg class="wave wave3" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#C93131"
                    d="M0,288L80,282.7C160,277,320,267,480,250.7C640,235,800,213,960,208C1120,203,1280,213,1360,218.7L1440,224V320H0Z"/>
            </svg>
        </div>
    `;
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
