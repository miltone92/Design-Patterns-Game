/*
La ballesta es una defensa propia del castillo, 
no se puede colocar en ninguna otra parte del tablero.
 Posee las siguientes características:
● Vida: 3.
● Ataque: 2
● Alcance del ataque: 2
● Precio: 5
*/

class Crossbow implements AbstractProduct, Subject {
  type = "Crossbow";
  healthPoints = 3;
  attack = 2;
  range = 2;
  cost = 5;
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
