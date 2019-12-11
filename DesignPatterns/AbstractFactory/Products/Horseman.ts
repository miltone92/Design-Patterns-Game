class Horseman implements AbstractProduct, Subject {
  type = "Horseman";
  cost = 15;
  healthPoints = 10;
  movements = 6;
  defense = 4;
  attack = 4;
  range = 1;
  storageCapacity = 6;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-horse"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 6;
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
