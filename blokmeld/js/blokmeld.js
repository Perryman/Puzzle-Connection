// get the game board and pieces elements to render the game
let gameBoard = document.getElementById("gameBoard");
let gamePieces = document.getElementById("gamePieces");
// create variables for the pieces on the board
let gameWall = "img/blokwall.png";
let gameFull = "img/blokfull.png";
let gameHole = "img/blokhole.png";
let gameNone = "img/bloknone.png";


let levels = [ //level 1
              ["wwwwwww",
               "wfffffw",
               "wffhffw",
               "wfhhhfw",
               "wfffffw",
               "wwwwwww"],
               //level 2
              ["wwwwwww",
               "wfffffw",
               "wfhhhfw",
               "wffhffw",
               "wfhhhfw",
               "wfffffw",
               "wwwwwww"],
               //level 3
              ["wwwwwww",
               "wfhfffw",
               "whhfffw",
               "wfhhffw",
               "wffhhhw",
               "wfffhfw",
               "wwwwwww"]
             ];

let pieces = [//piece 1
              ["nfn",
               "fff"],
              //piece 2
              ["fnf",
               "fff",
               "fnf"],
              //piece 3
              ["nfnnn",
               "ffnnn",
               "nffnn",
               "nnfff",
               "nnnfn"]
             ];
              

function buildPieces(gameElement, array) {
    // function that will build the game pieces and render HTML
    let finalarray = "";
    let arrayRow = "";
    for (let i = 0; i < array.length; i++) {
        let arrayCol = "";
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == "w") { arrayCol += buildImg(gameWall) };
            if (array[i][j] == "f") { arrayCol += buildImg(gameFull) };
            if (array[i][j] == "h") { arrayCol += buildImg(gameHole) };
            if (array[i][j] == "n") { arrayCol += buildImg(gameNone) };
        }
        arrayCol = buildCol(arrayCol);
        console.log(`arrayCol: ${arrayCol}`)
        arrayRow += buildRow(arrayCol);
    }
    finalarray = arrayRow;
    gameElement.innerHTML = finalarray;
}

function buildImg(path) {
    // takes an image path string and returns html img element
    img = "<img src='" + path + "' alt=''/>";
    return img;
}

function buildRow(row) {
    // takes a row string and returns html row element
    rowstart = "<div class='row m-0 p-0' id='gameRow'>";
    rowend = "</div>";
    row = rowstart + row + rowend;
    return row;
}

function buildCol(col) {
    // takes a col string and returns html col element
    colstart = "<div class='col m-0 p-0' id='gameCol'>";
    colend = "</div>";
    col = colstart + col + colend;
    return col;
}

for (let i = 0; i < 10; i++) {
    let button = document.getElementById("level" + (i + 1));
    
    if (typeof button !== 'undefined' && button !== null) {
        if (levels.length <= i) {
            button.classList.replace("btn-secondary", "btn-danger");
            button.addEventListener("click", function () {
                alert("Level " + (i + 1) + " not available yet");
            });
        } else{
            button.addEventListener("click", function () {
                buildPieces(gameBoard, levels[i]);
                buildPieces(gamePieces, pieces[i]);
            });
            button.classList.replace("btn-secondary", "btn-primary");
        }
    } else {
        console.log("button not found");
    }
}
