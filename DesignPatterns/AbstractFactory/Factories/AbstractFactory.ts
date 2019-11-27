interface AbstractFactory {
  createCharacter(type: any): AbstractProduct;

  createConstruction(type: any): AbstractProduct;
}
