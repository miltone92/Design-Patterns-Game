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

class Catapult implements AbstractProduct, Subject {
  type = "Catapult";
  healthPoints = 3;
  attack = 5;
  range = 2;
  cost = 8;
  id = "";
  owner = "";
  attacked = false;
  observers: any[] = [];

  saveMemento(): any {
    return new Memento(this);
  }

  addObserver(o: any) {
    this.observers.push(o);
  }
  notifyObservers(inventory: any) {
    for (const o of this.observers) {
      if (inventory >= 7) {
        o.notify("You canno't have more than 7 characters");
        return true;
      }
    }
    return false;
  }
}
