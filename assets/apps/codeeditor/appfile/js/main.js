let htmlEditor = CodeMirror.fromTextArea(
document.getElementById("html"),
{
    mode:"xml",
    lineNumbers:true
});


let cssEditor = CodeMirror.fromTextArea(
document.getElementById("css"),
{
    mode:"css",
    lineNumbers:true
});


let jsEditor = CodeMirror.fromTextArea(
document.getElementById("js"),
{
    mode:"javascript",
    lineNumbers:true
});



let editors = {

html:htmlEditor,
css:cssEditor,
js:jsEditor

};



function runCode(){


let output = `

${htmlEditor.getValue()}

<style>

${cssEditor.getValue()}

</style>


<script>

${jsEditor.getValue()}

<\/script>

`;


document.getElementById("preview").srcdoc = output;



localStorage.html = htmlEditor.getValue();
localStorage.css = cssEditor.getValue();
localStorage.js = jsEditor.getValue();


}



document.getElementById("run").onclick = runCode;




document.getElementById("clear").onclick=function(){

htmlEditor.setValue("");
cssEditor.setValue("");
jsEditor.setValue("");

runCode();

};




document.getElementById("save").onclick=function(){


let file = `

<!DOCTYPE html>

<html>

<head>

<style>

${cssEditor.getValue()}

</style>

</head>


<body>

${htmlEditor.getValue()}


<script>

${jsEditor.getValue()}

<\/script>


</body>

</html>

`;


let blob = new Blob(
[file],
{
type:"text/html"
});


let link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="project.html";

link.click();


};





document.querySelectorAll(".tab").forEach(tab=>{


tab.onclick=function(){


document.querySelectorAll(".tab")
.forEach(t=>t.classList.remove("active"));


this.classList.add("active");



let selected=this.dataset.editor;



Object.keys(editors).forEach(key=>{

editors[key]
.getWrapperElement()
.style.display="none";

});



editors[selected]
.getWrapperElement()
.style.display="block";


setTimeout(()=>{

editors[selected].refresh();

},100);


};


});





htmlEditor.setValue(
localStorage.html ||
"<h1>Hello World</h1>"
);


cssEditor.setValue(
localStorage.css ||
"body{text-align:center;font-family:Arial;}"
);


jsEditor.setValue(
localStorage.js ||
"console.log('working');"
);



htmlEditor.getWrapperElement().style.display="block";

cssEditor.getWrapperElement().style.display="none";

jsEditor.getWrapperElement().style.display="none";



htmlEditor.refresh();


runCode();