class Mage implements AbstractProduct {
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
  //
  saveMemento(): null {
    throw new Error("Method not implemented.");
  }
}
