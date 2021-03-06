/*=============================================
=                  VARIABLES                  =
=============================================*/
// Number of games
let numPlays = +prompt("Cuantas veces quieres jugar")
let userPlay
let compPlay

/*=============================================
=                    LOOP                     =
=============================================*/
for (let i = 0; i < numPlays; i++) {
   // User selection
   let select = prompt(
      "Elegir jugada: \n\n 1. Piedra \n 2. Papel \n 3. Tijeras"
   )
   while (select > 3 || select < 0 || !select) {
      alert("Selección inválida")
      select = prompt("Elegir jugada: \n\n 1. Piedra \n 2. Papel \n 3. Tijeras")
   }

   if (select == 1) {
      userPlay = "Piedra"
   } else if (select == 2) {
      userPlay = "Papel"
   } else userPlay = "Tijeras"

   // Computer selection
   let randomNum = Math.floor(Math.random() * 3)
   if (randomNum == 0) {
      compPlay = "Piedra"
   } else if (randomNum == 1) {
      compPlay = "Papel"
   } else compPlay = "Tijeras"

   // Play
   rps(userPlay, compPlay)
}

/*=============================================
=                  FUNCTIONS                  =
=============================================*/
// Game
function rps(user, computer) {
   if (user == "Piedra") {
      if (computer == "Piedra") {
         alert("Empate")
      } else if (computer == "Papel") {
         alert("Perdiste :(")
      } else alert("Has ganado!")
   }
   // Paper
   else if (user == "Papel") {
      if (computer == "Piedra") {
         alert("Has ganado!")
      } else if (computer == "Papel") {
         alert("Empate")
      } else alert("Perdiste :(")
   }
   // Scissors
   else if (user == "Tijeras") {
      if (computer == "Piedra") {
         alert("Perdiste :(")
      } else if (computer == "Papel") {
         alert("Has ganado!")
      } else alert("Empate")
   }
}
