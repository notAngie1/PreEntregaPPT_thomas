function aleatorio( min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function eleccion(jugada) {
    let resultado = ""
         if(jugada == 1) {
              resultado = "Piedra 🧱! 🤨"
         } else if(jugada == 2) {
              resultado = "Papel 🧾! 🤨"
         } else if(jugada == 3) {
              resultado = "Tijera ✂! 🤨"
         }
         else {
              resultado = "No elegiste ningunas de las anteriores, cagoneaste fuerte🙄"
         }    
         return resultado      
  }
 

      // 1 es piedra, 2 es papel, 3 es tijera
      let eleccionDelJugador = 0
      let pc = 0
      let triunfos = 0
      let perdidas = 0

  while (triunfos < 3 && perdidas < 3) {
      pc = aleatorio (1 , 3)
         eleccionDelJugador = prompt("Elige:  1 es para piedra, 2 es para papel, 3 es para tijera")

         alert("PC eligio: " + eleccion(pc))        
         alert("Vos elegiste: " + eleccion(eleccionDelJugador))


     elganador(eleccionDelJugador , pc)
      
// esto es el combate

  function elganador(eleccionDelJugador , pc) {
         if(pc == eleccionDelJugador) {
              alert("Es un EMPATE!, Safaste🤭");
         } else if((eleccionDelJugador == 1 && pc == 3) || (eleccionDelJugador == 2 && pc == 1) || (eleccionDelJugador == 3 && pc == 2)) {
              alert("Que ojete tenes,GANASTE!🥳");
              triunfos = triunfos + 1
         } else { 
              perdidas = perdidas + 1 
              alert("UUH PERDISTE!, sos malisimo jubilate🥱")}
              
         }
    }
  
    alert( "GANASTE " + triunfos + " VECES. PERDISTE " + perdidas + " VECES.")
