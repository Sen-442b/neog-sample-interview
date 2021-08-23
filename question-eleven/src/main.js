const passwordInput = document.querySelector("#password-input");
const btnSubmit = document.getElementById("btn-submit");
const outputDiv = document.querySelector(".output-div");

passwordInput.addEventListener("input", displayOutput)

btnSubmit.disabled = true;
function displayOutput(event){
    const eventValue = event.target.value
   
    if(eventValue.length<10){
        btnSubmit.disabled = true;
        outputDiv.innerText = "minimum 10 characters required"
        passwordInput.style.outline="1px solid red";
      
    }else{
        outputDiv.innerText="Success";
        passwordInput.style.outline="1px solid green"
        btnSubmit.disabled=false;
    }

}