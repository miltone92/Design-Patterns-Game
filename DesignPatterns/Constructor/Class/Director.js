//uses Builder

class Director {
  constructor() {}

  //Prototype
  build(builder) {
    builder.createGem();

    builder.buildColor();
    builder.buildSprite();
    builder.buildValue();
  }
}
