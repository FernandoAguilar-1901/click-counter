let setCounter = 0;
function count() {
    setCounter++;
    document.getElementById('text-count').innerHTML = setCounter;
}

function restart() {
    setCounter = 0;
    document.getElementById('text-count').innerHTML = setCounter;
}