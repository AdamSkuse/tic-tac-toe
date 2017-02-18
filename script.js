var cells = document.getElementsByClassName("cell");
var playerXToMove = true;
var movesLog = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalsArray = [];


for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", playerMove);
}

function playerMove(){
    console.log(this.id);
    if (this.hasChildNodes()) {
        alert("This space is taken!");
    } else {
      if (playerXToMove === true) {
           var icon = iconX();
        } else {
            var icon = iconO();
        }
        this.appendChild(icon);
        checkForWinner(this.id, playerXToMove);
        playerXToMove = !playerXToMove;
            }
}

function iconX() {
    var icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-close");
    icon.style="font-size:72px;color:red";
    return icon;
}

function iconO() {
    var icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add("fa-genderless");
    icon.style="font-size:72px;color:green";
    return icon;
}

function checkForWinner(index, playerX) {
    console.log(index, playerX);
    var playerNumber = 0;
    if (playerX === true) {
        playerNumber = 1;
    } else {
        playerNumber = 5;
    }
    console.log(playerNumber);
    movesLog[index] = playerNumber;
    console.log(movesLog);
    totalsArray = [];
    totalsArray.push(movesLog[0] + movesLog[1] + movesLog[2]);
    totalsArray.push(movesLog[3] + movesLog[4] + movesLog[5]);
    totalsArray.push(movesLog[6] + movesLog[7] + movesLog[8]);
    totalsArray.push(movesLog[0] + movesLog[3] + movesLog[6]); 
    totalsArray.push(movesLog[1] + movesLog[4] + movesLog[7]);
    totalsArray.push(movesLog[2] + movesLog[5] + movesLog[8]);
    totalsArray.push(movesLog[0] + movesLog[4] + movesLog[8]);
    totalsArray.push(movesLog[2] + movesLog[4] + movesLog[6]);
    console.log(totalsArray);
   
    if (totalsArray.includes(3)) {
        alert("X wins!");
    } else if (totalsArray.includes(15)) {
        alert("O wins!");
    }

}
