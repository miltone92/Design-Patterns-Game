class CareTaker {
  list: any[] = [];

  add(memento: any) {
    this.list.push(memento);
  }

  get(id: any) {
    for (const memento of this.list) {
      if (memento.troopId == id) {
        return memento;
      }
    }
  }
}
