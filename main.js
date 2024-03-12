function pedirNum(str, max) {
     let num = Number(prompt(str))

     while (!Number.isInteger(num) || isNaN(num) || (num < 0 || num > max)) {
          num = Number(prompt(str))
     }
     return num
}

function aleatorio(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min)
}

function juegoPrincipal() {
     let juego = new Juego()

     //menu principal
     while (true) {
          let opc = pedirNum(`hola Bienvenido/a al juego!
          1.Iniciar sesion
          2.Registrarse
          3.Mostrar lista de Jugadores
          4.Salir` , 4);


          if (opc === 1) {
               //logica para el inicio de sesion
               let nombre = prompt("Ingrese su nombre de usuario")
               let jugador = juego.jugadores.find((elm) => elm.nombre === nombre);

               if (jugador) {
                    juego.jugadorActual = jugador;
                    alert("¡Inicio de sesión exitoso!");
                    mostrarOpciones(juego);
                    break;
               } else {
                    alert("Nombre de usuario no encontrado.");
               }

          } else if (opc === 2) {
               //registrarse
               juego.agregarJugador();
          } else if (opc === 3) {
               // ver lista de jugadores
               let listaJugadores = juego.jugadores.map(jugador => jugador.nombre).join("\n");
               alert("Lista de jugadores:\n" + listaJugadores);
          } else if (opc == 4) {
               //salir del juego
               alert("Gracias por jugar. ¡Hasta luego!");
               break;
          } else {
               alert("Opción no válida. Por favor, seleccione una opción válida.");
          }
     }
}

function mostrarOpciones(juego) {
     // Opciones de juego
     let continuar = confirm("¿Desea empezar el juego?");
     if (continuar) {
          let triunfos = 0;
          let perdidas = 0;

          while (triunfos < 3 && perdidas < 3) {
               let eleccionDelJugador = pedirNum(`Ingrese:
                  1. para piedra
                  2. para papel
                  3. para tijera`, 3);
               let pc = aleatorio(1, 3);

               alert("PC eligió: " + juego.opciones[pc]);
               alert("Tú elegiste: " + juego.opciones[eleccionDelJugador]);

               if (eleccionDelJugador <= 0 || isNaN(eleccionDelJugador)) {
                    alert("Por favor, ingresa una opción válida.");
                    continue;
                }

               juego.elganador(eleccionDelJugador, pc);
               triunfos = juego.jugadorActual.triunfos;
               perdidas = juego.jugadorActual.perdidas;

          }
          alert("GANASTE " + triunfos + " VECES. PERDISTE " + perdidas + " VECES.");
     }
}

// Preguntar al usuario si quiere jugar de nuevo
const jugarDeNuevo = confirm("¿Quieres jugar de nuevo?");
if (jugarDeNuevo) {
     reiniciarPagina(); // Reiniciar el juego
}


//funcion para recargar la pagina
function reiniciarPagina() {
     window.location.reload();
}

juegoPrincipal();