/**
 * Note:
 * Concrete proudct: For Abstract Factory Design Pattern
 * Concrete component: For Decorator Design Pattern
 */
class Archer extends AbstractProduct {
  constructor() {
    super();
    this.type = "Archer";
    this.cost = 10;
    this.healthPoints = 10;
    this.movements = 3;
    this.defense = 3;
    this.attack = 3;
    this.range = 4;
    this.storageCapacity = 2;
    this.id = "";
    this.owner = "";
    this.sprite = `<i class="fas fa-bullseye"></i>`;
    this.powerUp = "";
    this.gems = 0;
  }

  saveMemento() {
    return new Memento(this);
  }
}
