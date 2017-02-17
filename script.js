var cells = document.getElementsByClassName("cell");
var playerXToMove = true;


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
