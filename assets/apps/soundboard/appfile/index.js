let audio;

const grid = document.getElementById("soundGrid");
const search = document.getElementById("search");
const noResults = document.getElementById("noResults");

let cards = [];


function playSound(sound){

    if(audio){
        audio.pause();
        audio.currentTime = 0;
    }

    audio = new Audio(sound);
    audio.play();

}



fetch("sounds.json")
.then(response => response.json())
.then(sounds => {


    sounds.forEach(sound => {


        let card = document.createElement("div");

        card.className = "sound-card";

        card.dataset.name = sound.name.toLowerCase();


        card.innerHTML = `
            <h3>${sound.name}</h3>
        `;


        card.onclick = () => {

            playSound("sounds/" + sound.file);

        };


        grid.appendChild(card);

        cards.push(card);


    });


});



search.addEventListener("input",()=>{


    let value = search.value.toLowerCase();

    let visible = 0;


    cards.forEach(card=>{


        let name = card.dataset.name;


        if(name.includes(value)){


            card.style.display = "block";

            visible++;


        }else{


            card.style.display = "none";


        }


    });



    if(visible === 0){

        noResults.style.display = "block";

    }else{

        noResults.style.display = "none";

    }


});