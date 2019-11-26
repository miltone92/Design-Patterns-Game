class GreenGem extends Builder {
  constructor() {
    super();
  }

  buildColor() {
    this.gem.setColor("Green");
  }
  buildSprite() {
    this.gem.setSprite(`<i class="far fa-gem"></i>`);
  }
  buildValue() {
    this.gem.setValue(1);
  }
}
