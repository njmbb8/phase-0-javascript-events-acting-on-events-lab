const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if(left > 0){
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const game = document.getElementById('game');
    const gameWidth = game.offsetWidth;

    if(left < (gameWidth - dodger.offsetWidth)){
        dodger.style.left = `${left + 10}px`;
    }
}
    

document.addEventListener("keydown", function(e) {
    if(e.key == "ArrowLeft"){
        moveDodgerLeft();
    }
    else if(e.key == "ArrowRight"){
        moveDodgerRight();
    }
})