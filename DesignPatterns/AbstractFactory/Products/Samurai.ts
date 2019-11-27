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

  saveMemento(): null {
    throw new Error("Method not implemented.");
  }
}
