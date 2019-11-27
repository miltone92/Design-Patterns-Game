class BlueGem implements Builder {
  gem: any;

  getGem() {
    throw new Error("Method not implemented.");
  }
  createGem() {
    throw new Error("Method not implemented.");
  }

  buildColor() {
    this.gem.setColor("Blue");
  }
  buildSprite() {
    this.gem.setSprite(`<i class="far fa-gem"></i>`);
  }
  buildValue() {
    this.gem.setValue(2);
  }
}
