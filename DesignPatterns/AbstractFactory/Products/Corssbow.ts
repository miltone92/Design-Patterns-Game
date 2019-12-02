/*
La ballesta es una defensa propia del castillo, 
no se puede colocar en ninguna otra parte del tablero.
 Posee las siguientes características:
● Vida: 3.
● Ataque: 2
● Alcance del ataque: 2
● Precio: 5
*/

class Crossbow implements AbstractProduct {
  type = "Crossbow";
  healthPoints = 3;
  attack = 2;
  range = 2;
  cost = 5;
  id = "";
  owner = "";
  attacked = false;

  saveMemento(): any {
    return new Memento(this);
  }
}
