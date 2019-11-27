class Gem {
  // constructor(color, sprite, value) {
  //   this.color = color;
  //   this.sprite = sprite;
  //   this.value = value;
  // }

  color: any;
  sprite: any;
  value: any;

  getColor() {
    return this.color;
  }

  getSprite() {
    return this.sprite;
  }

  getValue() {
    return this.value;
  }

  setColor(color: any) {
    this.color = color;
  }

  setSprite(sprite: any) {
    this.sprite = sprite;
  }

  setValue(value: any) {
    this.value = value;
  }
}
