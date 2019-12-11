class ConcreteIterator implements IIterator {
  container: ConcreteContainer;
  currentPosition = 0;

  first() {
    let obj = null;
    if (this.container.data.length != 0) {
      this.currentPosition = 0;
      obj = this.container.data[0];
    }
    return obj;
  }

  next() {
    let obj = null;
    if (this.currentPosition < this.container.data.length) {
      obj = this.container.data[this.currentPosition];
      this.currentPosition++;
    }
    return obj;
  }

  current() {
    let obj = null;
    if (this.currentPosition < this.container.data.length) {
      obj = this.container.data[this.currentPosition];
    }
    return obj;
  }
  hasMore(): boolean {
    let hasMore = false;
    if (this.currentPosition < this.container.data.length) {
      hasMore = true;
    }

    return hasMore;
  }

  constructor(container: ConcreteContainer) {
    this.container = container;
  }
}
