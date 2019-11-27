class ConstructionFactory implements AbstractFactory {
  createConstruction(type: any) {
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

  createCharacter(type: any) {
    return type;
  }
} //End of class
