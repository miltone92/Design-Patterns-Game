class Horseman implements AbstractProduct {
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

  saveMemento(): null {
    throw new Error("Method not implemented.");
  }
}
