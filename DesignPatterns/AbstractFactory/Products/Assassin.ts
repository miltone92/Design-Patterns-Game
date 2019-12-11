class Assassin implements AbstractProduct {
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

  saveMemento(): any {
    return new Memento(this);
  }
}
