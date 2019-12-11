class Berserker implements AbstractProduct, Subject {
  type = "Berserker";
  cost = 25;
  healthPoints = 15;
  movements = 1;
  defense = 10;
  attack = 10;
  range = 2;
  storageCapacity = 6;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-paw"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 1;
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
