/**
 * Note:
 * Concrete proudct: For Abstract Factory Design Pattern
 * Concrete component: For Decorator Design Pattern
 */
class Archer implements AbstractProduct {
  type = "Archer";
  cost = 10;
  healthPoints = 10;
  movements = 3;
  defense = 3;
  attack = 3;
  range = 4;
  storageCapacity = 2;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-bullseye"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 3;

  saveMemento(): any {
    return new Memento(this);
  }
}
