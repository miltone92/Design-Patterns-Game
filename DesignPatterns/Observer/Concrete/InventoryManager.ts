/**
 * Serve as concrete subject
 */

class InventoryManager implements Subject {
  observers: any[] = [];

  addObserver(o: any) {
    this.observers.push(o);
  }

  notifyObservers(inventory: any) {
    for (const o of this.observers) {
      if (inventory >= 7) {
        o.notify("You cannot have more than 7 characters");
        return true;
      }
    }
    return false;
  }
}
