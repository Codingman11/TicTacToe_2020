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

  let cTable = document.createElement("div");
  cTable.setAttribute("id", "container");

  for (let i = 0; i < 5; i++) {
    let addTr = document.createElement("tr");
    addTr.setAttribute("class", "row");
    for (let j = 0; j < 5; j++) {
      let addTd = document.createElement("td");
      addTd.setAttribute("id", x);
      addTd.setAttribute("class", "cell col");

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
  var myBar = document.getElementById("myBar");
  let progress = document.createElement("div");
  progress.setAttribute("class", "determinate");

  myBar.appendChild(progress);
  var width = 0;
  var id = setInterval(frame, 1000);
  function frame() {
    if (width > 100) {
      clearInterval(id);
      alert("timeout");
    } else {
      width += 10;
      progress.style.width = width + "%";
    }
  }
}

function set(array) {
  move();
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
    } else {
      alert("timeout!");
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
