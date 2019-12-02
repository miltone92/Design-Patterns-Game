class Samurai implements AbstractProduct {
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

  saveMemento(): any {
    return new Memento(this);
  }
}
