interface Subject {
  addObserver(o: any): any;
  notifyObservers(inventory: any): any;
}
