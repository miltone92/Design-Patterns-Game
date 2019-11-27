/*
 * Concorete factory
 */

class TroopFactory implements AbstractFactory {
  //Prototypes
  createCharacter(type: any) {
    let character;
    switch (type) {
      case "Archer":
        character = new Archer();
        break;
      case "Samurai":
        character = new Samurai();
        break;
      case "Berserker":
        character = new Berserker();
        break;
      case "Mage":
        character = new Mage();
        break;
      case "Assassin":
        character = new Assassin();
        break;
      case "Horseman":
        character = new Horseman();
        break;
      case "Spy":
        character = new Spy();
        break;
      default:
        console.error("Not a valid character type");
        break;
    }
    return character;
  }

  createConstruction(type: any) {
    return type;
  }
}
