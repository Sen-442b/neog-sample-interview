const inputOne = document.getElementById("inp-one");
const inputTwo = document.getElementById("inp-two");
const btnAdd = document.getElementById("btn-add");
const btnSubtract = document.getElementById("btn-sub");
const btnMultiply = document.getElementById("btn-mul");
const btnDivide = document.getElementById("btn-divide");
const outputDiv = document.querySelector(".output");

 


btnAdd.addEventListener("click",getCalculatedData);
btnSubtract.addEventListener("click",getCalculatedData);
btnMultiply.addEventListener("click",getCalculatedData);
btnDivide.addEventListener("click",getCalculatedData);




function getCalculatedData(event){
   const pointerEventCheck = event.target.textContent;
   console.log(pointerEventCheck);
   if(inputOne.value && inputTwo.value){
   if(pointerEventCheck==="+"){
       const resultAdd = Number(inputOne.value) + Number(inputTwo.value);
       outputDiv.innerText = resultAdd;
    
   }
   else if(pointerEventCheck==="-"){
    const resultSubtract = Number(inputOne.value) - Number(inputTwo.value);
    outputDiv.innerText = resultSubtract;
   }
   else if(pointerEventCheck==="*"){
       console
    const resultMulti = Number(inputOne.value) * Number(inputTwo.value);
    outputDiv.innerText = resultMulti;
   }
   else if(pointerEventCheck==="/"){
    const resultDivide = Number(inputOne.value) / Number(inputTwo.value);
    outputDiv.innerText = resultDivide;
   }
}else{
    outputDiv.innerText = "Enter all the required values"
}
}