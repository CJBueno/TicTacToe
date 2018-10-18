var board = document.querySelectorAll("td")
var display = document.getElementById("display")
var reset = document.querySelector("button")
var boardData = ['','','','','','','','','']
var turn = "💩"
var win = false
var winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

reset.addEventListener('click', resetGame)

for (i=0; i<board.length; i++){
  board[i].addEventListener("click", handleClick)
}

function handleClick(e) {
  if(!boardData[e.target.id]){
    if(!win){
      boardData[e.target.id] = turn
      render()
      checkWin()
      changeTurn()
      checkTie()
    }
  }
}

function render() {
  for(i=0; i <boardData.length; i++){
    board[i].innerText = boardData[i]
  }
}

function changeTurn() {
  if (turn ==="💩"){
    turn ="🌈"
  } else {
    turn = "💩"
  }
}

function checkWin(){
 for(i=0; i < winCombos.length; i++) {
   var line =""
   for(j=0; j < winCombos[i].length; j++) {
     line = line + boardData[winCombos[i][j]]
   }
   if (line.length === 6) {
     if (line === "💩💩💩") {
       display.innerText = "💩 Wins"
       win = true
     } else if (line === "🌈🌈🌈") {
       display.innerText = "🌈 Wins"
       win = true
     }
   }
 }
  var boardString =""
  for (i=0; i < boardData.length; i++){
    boardString = boardString + boardData[i]
  }
  if (boardString.length === 18 && !win) {
    display.innerText = "NOBODY WINS"
    win = true
  }
}

function resetGame() {
  boardData = ['','','','','','','','',''];
  display.innerText = ""
  turn = "💩"
  win = false
  render();
}