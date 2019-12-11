class ConcreteContainer implements Container {
  data: any[] = [];

  getIterator() {
    return new ConcreteIterator(this);
  }

  constructor() {}

  add(data: any) {
    this.data.push(data);
  }
}
