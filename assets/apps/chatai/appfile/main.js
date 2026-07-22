let aiThinking = false;


const starter = `

<div class="welcome" id="welcome">

<h1>
How can I help?
</h1>

<p>
Ask anything or try one of these examples.
</p>

<div class="suggestions">

<div class="suggestion" onclick="fillPrompt('What is the height of the Eiffel Tower?')">
<i class='bx bx-world'></i>
<span>What is the height of the Eiffel Tower?</span>
</div>

<div class="suggestion" onclick="fillPrompt('Create a website using HTML and CSS')">
<i class='bx bx-code-alt'></i>
<span>Create a website using HTML and CSS</span>
</div>

<div class="suggestion" onclick="fillPrompt('Explain quantum physics simply')">
<i class='bx bx-book-open'></i>
<span>Explain quantum physics simply</span>
</div>

<div class="suggestion" onclick="fillPrompt('Give me ideas for a new project')">
<i class='bx bx-bulb'></i>
<span>Give me ideas for a new project</span>
</div>

</div>

</div>

`;



function loadChat(){

let saved = localStorage.getItem("chatAI");

if(saved){

document.getElementById("chat").innerHTML = saved;

}

else{

document.getElementById("chat").innerHTML = starter;

}

}


loadChat();



function saveChat(){

localStorage.setItem(
"chatAI",
document.getElementById("chat").innerHTML
);

}



function fillPrompt(text){

document.getElementById("prompt").value=text;

}







async function askAI(message){


let attempts = 0;



while(attempts < OPENAI_API_KEYS.length){


let response = await fetch(

"https://api.openai.com/v1/chat/completions",

{

method:"POST",

headers:{

"Authorization":`Bearer ${OPENAI_API_KEYS[currentOpenAIKey]}`,

"Content-Type":"application/json"

},


body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[

{

role:"user",

content:message

}

],

temperature:0.7

})

}

);



let data = await response.json();



console.log("OpenAI Response:", data);





if(response.status === 429){


currentOpenAIKey++;


if(currentOpenAIKey >= OPENAI_API_KEYS.length){

currentOpenAIKey = 0;

}


attempts++;


continue;


}




if(!response.ok){

throw new Error(
data.error?.message || "ChatAI request failed."
);

}





if(!data.choices){

throw new Error(
"No response received from ChatAI."
);

}





return data.choices[0].message.content;



}



throw new Error(
"ChatAI 505 request failed."
);


}









async function sendMessage(){


let input=document.getElementById("prompt");

let text=input.value.trim();



if(text=="") return;


if(aiThinking) return;



let chat=document.getElementById("chat");



if(!validQuestion(text)){


let ai=document.createElement("div");


ai.className="message ai";


ai.innerText="Please ask a proper question!";


chat.appendChild(ai);


saveChat();


return;


}





let welcome=document.getElementById("welcome");


if(welcome){

welcome.remove();

}





let user=document.createElement("div");


user.className="message user";


user.innerText=text;


chat.appendChild(user);



input.value="";





let typing=document.createElement("div");


typing.className="typing";


typing.innerText="ChatAI is thinking...";


chat.appendChild(typing);



aiThinking=true;


chat.scrollTop=chat.scrollHeight;






try{


let answer = await askAI(text);



typing.remove();



let ai=document.createElement("div");


ai.className="message ai";


ai.innerText=answer;


chat.appendChild(ai);



}



catch(error){



typing.remove();



let ai=document.createElement("div");


ai.className="message ai";


ai.innerText=error.message;


chat.appendChild(ai);



}





aiThinking=false;


saveChat();


chat.scrollTop=chat.scrollHeight;


}









function validQuestion(text){


if(text.length < 5)

return false;



let letters=text.replace(/[^a-zA-Z]/g,"");


if(letters.length < 3)

return false;





let bad=[

"asdf",
"qwerty",
"aaaa",
"bbbb",
"12345",
"11111"

];





for(let x of bad){


if(text.toLowerCase().includes(x))

return false;


}





return true;


}








document.getElementById("prompt").addEventListener("keydown",function(e){


if(e.key==="Enter"){


e.preventDefault();


sendMessage();


}


});









function openReset(){

document.getElementById("overlay").style.display="flex";

}



function closeReset(){

document.getElementById("overlay").style.display="none";

}



function resetChat(){

localStorage.removeItem("chatAI");

location.reload();

}