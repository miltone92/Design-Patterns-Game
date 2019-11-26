/*
La catapulta es la defensa más fuerte
que puede colocarse en el castillo,
no se puede colocar en ninguna otra parte del tablero.
Posee las siguientes características:
● Vida: 3.
● Ataque: 5
● Alcance del ataque: 2
● Precio: 8
*/

class Catapult {
  constructor() {
    this.type = "Catapult";
    this.healthPoints = 3;
    this.attack = 5;
    this.range = 2;
    this.cost = 8;
    this.id = "";
    this.owner = "";
  }
}
