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

class Catapult implements AbstractProduct {
  type = "Catapult";
  healthPoints = 3;
  attack = 5;
  range = 2;
  cost = 8;
  id = "";
  owner = "";

  saveMemento(): null {
    throw new Error("Method not implemented.");
  }
}
