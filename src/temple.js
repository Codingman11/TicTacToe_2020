import "./styles.css";

var pla1 = "X",
  pla2 = "O",
  EMPTY = "";
let moves = 0;

//Creating array
function createArray() {
  let array = [];

  return array;
}

function addTable(array) {
  let x = 0;

  let cTable = document.createElement("table");
  cTable.setAttribute("id", "table");
  for (let i = 0; i < 5; i++) {
    let addTr = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
      let addTd = document.createElement("td");
      addTd.setAttribute("id", x);
      addTd.setAttribute("class", "cell");

      array[x] = x.toString();
      let node = document.createTextNode("");
      addTd.appendChild(node);
      addTr.appendChild(addTd);
      x++;
    }

    cTable.appendChild(addTr);
    let tab = document.getElementById("board");
    tab.appendChild(cTable);
  }
  return array;
}

function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      return false;
    } else {
      width += 10;
      elem.style.width = width + "%";
      return true;
    }
  }
}

function set(array) {
  let timeout = move();
  let cells = document.querySelectorAll(".cell");
  let turn = 0;

  var getId = function() {
    var el = this;

    let arId = parseInt(el.id, 10);
    console.log(arId);

    if (this.innerHTML !== EMPTY) {
      alert("This is already marked! Try agian");
    } else if (turn === 0) {
      el.classList.add("x");
      el.innerHTML = pla1;
      turn = 1;
      array[arId] = pla1;
    } else if (turn === 1) {
      el.classList.add("o");
      el.innerHTML = pla2;
      turn = 0;
      array[arId] = pla2;
    }
    if (timeout === false) {
      alert("Timeout");
      if (turn === 0) {
        turn = 1;
      } else if (turn === 1) {
        turn = 0;
      }
    }
    moves++;
    console.log("Moves: " + moves);
  };

  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", getId);
  }
}

function init() {
  let array = createArray();
  array = addTable(array);
  set(array);
}
init();
