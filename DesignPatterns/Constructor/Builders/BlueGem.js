class BlueGem extends Builder {
  constructor() {
    super();
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
