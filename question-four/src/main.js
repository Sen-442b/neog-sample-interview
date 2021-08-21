// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const textDiv = document.getElementById("text-div");
const textInput = document.getElementById("text-input");
const btnHeadingOne = document.getElementById("btn-h1");
const btnHeadingTwo = document.getElementById("btn-h2");
const btnHeadingThree = document.getElementById("btn-h3");


btnHeadingOne.addEventListener("click",getRequiredHeading);
btnHeadingTwo.addEventListener("click",getRequiredHeading);
btnHeadingThree.addEventListener("click",getRequiredHeading);


function getRequiredHeading(event){
    const getPointerEventCheck = event.target.textContent;
    if(textInput.value){
   if(getPointerEventCheck==="H1"){
       textDiv.innerHTML=`<h1>${textInput.value}</h1>`
   }
   else if(getPointerEventCheck==="H2"){
       textDiv.innerHTML=`<h2>${textInput.value}</h2>`
   }
   else if(getPointerEventCheck==="H3"){
       textDiv.innerHTML=`<h3>${textInput.value}</h3>`
   }
}else{
    textInput.placeholder="Enter text input first"
}


}