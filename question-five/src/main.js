// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

const inputText = document.getElementById("text-input");
const btnRed = document.getElementById("btn-red");
const btnGreen = document.getElementById("btn-green");
const btnBlue = document.getElementById("btn-blue");



btnRed.addEventListener("click",getTextColor)
btnGreen.addEventListener("click",getTextColor)
btnBlue.addEventListener("click",getTextColor)


function getTextColor(event){
const pointerEventCheck = event.target.textContent;
if(inputText.value){
if(pointerEventCheck==="Red"){
    inputText.style.color="red";
}
else if(pointerEventCheck==="Green"){
    inputText.style.color="green"
}
else{
    inputText.style.color="blue"
}
}else{
    inputText.placeholder="Enter a text first dude"
}
}