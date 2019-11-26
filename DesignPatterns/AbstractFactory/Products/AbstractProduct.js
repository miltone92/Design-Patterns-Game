/**
 * Roles in patterns:
 * Abstract proudct: For Abstract Factory Design Pattern
 * Abstract component: For Decorator Design Pattern
 * Originator: For Memento Design Pattern
 */

class AbstractProduct {
  constructor() {
    this.type;
    this.cost;
    this.healthPoints;
    this.movements;
    this.defense;
    this.attack;
    this.range;
    this.storageCapacity;
    this.id;
    this.owner;
    this.sprite;
    this.powerUp;
    this.gems;
  }
  //Prototypes
  saveMemento() {
    return null;
  }
}
