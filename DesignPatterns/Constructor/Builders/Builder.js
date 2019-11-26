/*
 * Abstract class builder
 */

class Builder {
  constructor() {
    this.gem;
  }

  //Prototype
  getGem() {
    return this.gem;
  }

  createGem() {
    this.gem = new Gem();
  }

  buildColor() {
    return null;
  }

  buildSprite() {
    return null;
  }

  buildValue() {
    return null;
  }
}
