//uses Builder

class Director {
  constructor() {}

  build(builder: Builder) {
    builder.createGem();
    builder.buildColor();
    builder.buildSprite();
    builder.buildValue();
  }
}
