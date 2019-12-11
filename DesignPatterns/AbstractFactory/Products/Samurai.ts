class Samurai implements AbstractProduct, Subject {
  type = "Samurai";
  cost = 15;
  healthPoints = 10;
  movements = 2;
  defense = 5;
  attack = 5;
  range = 1;
  storageCapacity = 2;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-dragon"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 2;
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
