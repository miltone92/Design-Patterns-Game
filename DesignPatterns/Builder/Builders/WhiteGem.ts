class WhiteGem implements Builder {
  gem: any;
  getGem() {
    return this.gem;
  }
  createGem() {
    this.gem = new Gem();
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
