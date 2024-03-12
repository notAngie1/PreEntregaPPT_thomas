
class Juego {
    constructor() {
        this.jugadores = []
        this.opciones = {
            1: 'Piedra 🧱! 🤨',
            2: 'Papel 🧾! 🤨',
            3: 'Tijera ✂! 🤨'
        };
        this.jugadorActual = null
    }


    agregarJugador(nombre) {
        nombre = prompt("ingrese su nombre de usuario");
        while (!confirm("seguro que te queres llamar " + nombre + "?")) {
            nombre = prompt("Ingrese su nombre de usuario");
        }
        this.jugadores.push(new Jugador(nombre))
    }

    // esto es el combate
    elganador(eleccionDelJugador, pc) {
        if (pc == eleccionDelJugador) {
            alert(this.jugadorActual.nombre + " Es un EMPATE!, Safaste🤭");
        } else if ((eleccionDelJugador == 1 && pc == 3) || (eleccionDelJugador == 2 && pc == 1) || (eleccionDelJugador == 3 && pc == 2)) {
            alert(this.jugadorActual.nombre + " Que ojete tenes,GANASTE!🥳");
            this.jugadorActual.triunfos++;
            this.jugadorActual.maxScore++;
        } else {
            alert(this.jugadorActual.nombre + " PERDISTE!, sos malisimo jubilate🥱");
            this.jugadorActual.perdidas++;
            this.jugadorActual.maxScore = 0;
        }
    }
}
