/*
 * Abstract class builder
 */

interface Builder {
  gem: Gem;

  getGem(): any;
  createGem(): any;
  buildColor(): any;
  buildSprite(): any;
  buildValue(): any;
}
