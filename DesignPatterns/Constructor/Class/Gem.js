class Gem {
  // constructor(color, sprite, value) {
  //   this.color = color;
  //   this.sprite = sprite;
  //   this.value = value;
  // }

  constructor() {
    this.color = "";
    this.sprite = "";
    this.value = 0;
  }

  //Prototypes

  getColor() {
    return this.color;
  }

  getSprite() {
    return this.sprite;
  }

  getValue() {
    return this.value;
  }

  setColor(color) {
    this.color = color;
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }

  setValue(value) {
    this.value = value;
  }
}
