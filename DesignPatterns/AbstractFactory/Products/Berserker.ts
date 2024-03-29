class Berserker implements AbstractProduct {
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

  saveMemento(): any {
    return new Memento(this);
  }
}
