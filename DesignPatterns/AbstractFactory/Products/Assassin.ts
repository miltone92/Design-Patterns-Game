class Assassin implements AbstractProduct, Subject {
  type = "Assassin";
  cost = 5;
  healthPoints = 10;
  movements = 4;
  defense = 3;
  attack = 3;
  range = 2;
  storageCapacity = 2;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-skull-crossbones"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 4;
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
