/*
La ballesta es una defensa propia del castillo, 
no se puede colocar en ninguna otra parte del tablero.
 Posee las siguientes características:
● Vida: 3.
● Ataque: 2
● Alcance del ataque: 2
● Precio: 5
*/

class Crossbow {
  constructor() {
    this.type = "Crossbow";
    this.healthPoints = 3;
    this.attack = 2;
    this.range = 2;
    this.cost = 5;
    this.id = "";
    this.owner = "";
  }
}
