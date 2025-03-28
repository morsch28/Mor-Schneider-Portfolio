

function add(){
   
    const userColor = document.getElementById("userColor").value;
    const userWidth = document.getElementById("userWidth").value + "px";
    const userHeight = document.getElementById("userHeight").value + "px";
    const userText = document.getElementById("userText").value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById("fontSize").value + "px";
    const borderThick = document.getElementById("borderThick").value + "px";
    const borderStyle = document.getElementById("borderStyle").value;
    const borderColor = document.getElementById('borderColor').value;
    const padding = document.getElementById("padding").value + "px";
    const margin = document.getElementById("margin").value + "px";
    const borderRadius = document.getElementById("borderRadius").value + "px";
    const typeOfElement = document.getElementById("type").value; 
    const shadowX = document.getElementById("shadowX").value + "px";
    const shadowY = document.getElementById("shadowY").value + "px";
    const shadowColor = document.getElementById("colorOfShadow").value;
    let box = document.createElement(typeOfElement);
    box.style.width = userWidth;
    box.style.height = userHeight;
    box.style.color = textColor;
    box.style.fontSize = fontSize;
    box.style.border = `${borderThick} ${borderColor} ${borderStyle}`;
    box.style.padding = padding;
    box.style.margin = margin;
    box.style.borderRadius = borderRadius;
    box.textContent = userText;
    box.style.boxShadow = `${shadowX} ${shadowY} 5px  ${shadowColor}`;
    if(typeOfElement.startsWith("h")){
        box.style.backgroundColor = "transparent";
        box.style.border = "none"
    }
    else{
        box.style.border = "1px solid black";
        box.style.backgroundColor = userColor;
    }
    document.getElementById("inbox").appendChild(box);

    
}