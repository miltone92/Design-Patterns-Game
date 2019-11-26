class ConstructionFactory extends AbstractFactory {
  constructor() {
    super();
  }

  //Prototypes
  createConstruction(type) {
    let construction;
    switch (type) {
      case "Castle":
        construction = new Castle();
        break;
      case "Corossbow":
        construction = new Crossbow();
        break;
      case "Catapult":
        construction = new Catapult();
        break;
      default:
        console.error("Not a valid construction type");
        break;
    }

    return construction;
  }

  createCharacter(type) {
    return "Construction factory cannot create character!";
  }
} //End of class
