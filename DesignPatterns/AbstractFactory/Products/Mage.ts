class Mage implements AbstractProduct, Subject {
  type = "Mage";
  cost = 10;
  healthPoints = 10;
  movements = 2;
  defense = 3;
  attack = 6;
  range = 3;
  storageCapacity = 2;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-hat-wizard"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 2;
  observers: any[] = [];

  //
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
