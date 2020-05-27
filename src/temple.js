import "./styles.css";

let turn = 0,
  EMPTY = "",
  moves = 0,
  MAX = 5;

var pla1 = "X",
  pla2 = "O";
var board = new Array(5).fill("");

function makeArray(board) {
  for (let i = 0; i < MAX; i++) {
    board[i] = new Array(5).fill("");
  }
}

if (document.readyState !== "loading") {
  initialzeCode();
}
function initialzeCode() {
  console.log("Initializing");
  createTable();
  makeArray(board);
  console.log(board);
}

function createTable() {
  let table = document.createElement("table");
  let a = 0;
  table.setAttribute("id", "table");
  for (let i = 0; i < MAX; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < MAX; j++) {
      let cell = document.createElement("td");
      cell.setAttribute("id", a);

      cell.addEventListener("click", set, false);
      row.appendChild(cell);
      a++;
    }
    table.appendChild(row);

    let tab = document.getElementById("board");
    tab.appendChild(table);
  }
}

function set(event) {
  if (this.innerHTML === EMPTY && turn === 0) {
    this.innerHTML = pla1;
    this.classList.add("x");
    turn = 1;
    moves++;
    board[event.target.parentNode.rowIndex][event.target.cellIndex] = pla1;
  } else if (this.innerHTML === EMPTY && turn === 1) {
    this.innerHTML = pla2;
    this.classList.add("o");
    turn = 0;
    moves++;
    board[event.target.parentNode.rowIndex][event.target.cellIndex] = pla2;
  } else {
    alert("Already marked! Try again");
  }
  console.log(board);
  if (winCondition()) {
    alert("Winner");
  }
}

function winCondition() {
  //Check row
  let move;
  for (let row = 0; row < MAX; row++) {
    move = 0;
    for (let col = 0; col < MAX; col++) {
      if (board[row][col] === EMPTY) {
        continue;
      } else if (board[row][col] === board[row][col + 1]) {
        move++;
        if (move === 4) {
          return true;
        }
      }
    }
  }
}
