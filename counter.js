let setCounter = 0;
let funnyMessage;

function count() {
    setCounter++;
    document.getElementById('text-count').innerHTML = setCounter;
    if (setCounter >= 5) {
        funnyMessage = String("You're good at this!!");
        document.getElementById('funny-message').innerHTML = funnyMessage;
    } if (setCounter >= 10) {
        funnyMessage = String("Keep going!!");
        document.getElementById('funny-message').innerHTML = funnyMessage;
    } if (setCounter >= 15) {
        funnyMessage = String("Impressive!!");
        document.getElementById('funny-message').innerHTML = funnyMessage;
    } if (setCounter >= 20){
        funnyMessage = String("You,re gonna break your mouse...");
        document.getElementById('funny-message').innerHTML = funnyMessage;
    } if (setCounter >= 25){
        funnyMessage = String("Seriously, stop...");
        document.getElementById('funny-message').innerHTML = funnyMessage;
    } if (setCounter >= 30){
        funnyMessage = String("...");
        document.getElementById('funny-message').innerHTML = funnyMessage;
    }
}

function reset() {
    setCounter = 0;
    funnyMessage = "";
    document.getElementById('text-count').innerHTML = setCounter;
    document.getElementById('funny-message').innerHTML = funnyMessage;

}
