/**
 * Note:
 * Concrete proudct: For Abstract Factory Design Pattern
 * Concrete component: For Decorator Design Pattern
 */
class Archer implements AbstractProduct, Subject {
  type = "Archer";
  cost = 10;
  healthPoints = 10;
  movements = 3;
  defense = 3;
  attack = 3;
  range = 4;
  storageCapacity = 2;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-bullseye"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 3;
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
