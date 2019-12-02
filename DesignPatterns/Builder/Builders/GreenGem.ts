class GreenGem implements Builder {
  gem: any;
  getGem() {
    return this.gem;
  }
  createGem() {
    this.gem = new Gem();
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
