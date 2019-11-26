class CareTaker {
  constructor() {
    this.list = [];
  }
  add(memento) {
    this.list.push(memento);
  }
  get(id) {
    for (const memento of this.list) {
      if (memento.troopId == id) {
        return memento;
      }
    }
  }
}
