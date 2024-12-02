
let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver= false;

window.onload= function () {
    setGame();
}




function setGame() {
    // setup the grid for the game board in html
    for (var i = 0; i < 9; i++) {
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setMole,1000); // set the mole to appear every second
    setInterval(setPlant,2000); // set the plant to appear every 2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

// the Mole
function setMole(){
    if (gameOver) {
        return;
    }

    if(currentMoleTile){
        currentMoleTile.innerHTML=""
    }

    // set the mole to a random tile on the board
    let mole =document.createElement("img");
    mole.src = "./Assets/monty-mole.png";

    let num =getRandomTile();
    if (currentPlantTile && currentPlantTile.id == num) {
        return; 
    }
    currentMoleTile= document.getElementById(num);
    currentMoleTile.appendChild(mole)
}

// the Plant

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }
    let plant =document.createElement("img");
    plant.src = "./Assets/piranha-plant.png";


    let num =getRandomTile();
    if (currentMoleTile && currentMoleTile.id == num) {
        return; 
    }
    currentPlantTile= document.getElementById(num);
    currentPlantTile.appendChild(plant)


}

// score and clicking

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); // update the score
    }
    else if (this == currentPlantTile) {
        document.getElementById("score").innerText = "GAME OVER "+ score.toString();
        gameOver = true;
    }
}