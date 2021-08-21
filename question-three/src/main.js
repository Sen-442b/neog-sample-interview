const textInput = document.getElementById("text-input");
const btnLarge = document.getElementById("btn-large");
const btnSmall = document.getElementById("btn-small");

let currentFontSize = 13.33;

btnLarge.addEventListener("click",getFontSize);
btnSmall.addEventListener("click",getFontSize);




function getFontSize(event){
    const pointerEventCheck = event.target.textContent;

    if(pointerEventCheck==="+"){
        currentFontSize += 2;
        textInput.style.fontSize = `${currentFontSize}px`
    
    }
    else if(pointerEventCheck==="-"){
            currentFontSize -= 2;
            textInput.style.fontSize = `${currentFontSize}px`
        
        }
    
    }

