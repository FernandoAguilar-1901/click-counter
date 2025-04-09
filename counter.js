let setCounter = 5;
let textCount = document.getElementById("text-count");
let funnyMessage = document.getElementById("funny-message");
let countButton = document.getElementById("count-button");
let clearButton = document.getElementById("clear-button");


// Funcion para boton de conteo
countButton.addEventListener("click", e => {
    setCounter++;
    textCount.innerText = setCounter;

    switch (setCounter) {
        case 5:
            funnyMessage.innerText = "You're good at this!!";
            break;

        case 10:
            funnyMessage.innerText = "Keep going!!";
            break;

        case 15:
            funnyMessage.innerText = "Impressive!!";
            break;

        case 20:
            funnyMessage.innerText = "You,re gonna break your mouse...";
            break;

        case 25:
            funnyMessage.innerText = "Seriously, stop...";
            break;

        case 30:
            funnyMessage.innerText = "...";
            break;

    }

});


  
// Funcion para boton de reseteo
clearButton.addEventListener("click", e => {
    setCounter = 0;
    textCount.innerText = setCounter;
    funnyMessage.innerText = "";
});
