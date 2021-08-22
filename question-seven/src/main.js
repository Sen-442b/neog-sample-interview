const textDiv = document.querySelector(".text-div");
const btnLoaded = document.getElementById("btn-loaded");


btnLoaded.addEventListener("click",getClickResult)

function getClickResult(){
    textDiv.style.visibility = "hidden"
}