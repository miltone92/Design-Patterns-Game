class WhiteGem extends Builder {
  constructor() {
    super();
  }

  buildColor() {
    this.gem.setColor("White");
  }
  buildSprite() {
    this.gem.setSprite(`<i class="far fa-gem"></i>`);
  }
  buildValue() {
    this.gem.setValue(1);
  }
}
