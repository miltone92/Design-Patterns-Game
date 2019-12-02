/*
Es la construcción base de cada jugador, 
posee una cantidad definida de vida, 
no se puede regenerar
y al ser destruida el jugador pierde inmediatamente.
Aquí se almacena el oro que se recolecta durante el juego 
y se generan las tropas.
Las características del castillo son vida, oro y tropas.
Inicialmente la vida es 30 puntos, 
el oro 20 y no posee ninguna tropa. 

El jugador puede adquirir más oro al encontrar las gemas
escondidas dentro del tablero, 
al robarlo de los castillos de sus oponentes 
o al matar a un espía enemigo que cargue oro.

El castillo puede defenderse únicamente generando construcciones
de defensa y puede tener un máximo de 2 ballestas
 y 1 catapulta.
Los personajes que quedan en reserva hasta esperar su
 turno para entrar al campo no pueden atacar,
  por lo tanto no pueden defender el castillo



El castillo tiene la habilidad de generar tropas.
Cada jugador puede tener un máximo de 7 personajes;
pero en el tablero solo pueden haber 3 a la vez
y cada uno debe ser diferente.
Se debe esperar a que alguno muera para poder introducir 
otro y todos arrancan en el castillo.

Cada personaje tiene un costo por lo que 
el castillo va a utilizar el oro que exista dentro de él 
para generar las tropas. 
Otra funcionalidad del castillo es
cancelar la producción de un personaje;
sin embargo, el oro gastado no se vuelve a acreditar.

*/

class Castle implements AbstractProduct {
  id: any;
  owner: any;
  type = "Castle";
  healthPoints = 30;
  gold = 20;
  troops: (
    | Archer
    | Samurai
    | Berserker
    | Mage
    | Assassin
    | Horseman
    | Spy
  )[] = []; //max 7
  crossbows: (Castle | Crossbow | Catapult)[] = []; // max 2
  catapults: (Castle | Crossbow | Catapult)[] = []; // max 1
  graphic = `<i class="fab fa-fort-awesome"></i>`;
  enemies: (
    | Archer
    | Samurai
    | Berserker
    | Mage
    | Assassin
    | Horseman
    | Spy
  )[] = [];

  //Prototypes
  createCatapult() {
    let factory = new ConstructionFactory();
    let construction = factory.createConstruction("Catapult");
    // construction.id = "C" + generateRandomNumber(6);
    this.catapults.push(construction);
    return construction;
  }

  createCrossbow() {
    let factory = new ConstructionFactory();
    let construction = factory.createConstruction("Crossbow");
    // construction.id = "C" + generateRandomNumber(6);
    this.crossbows.push(construction);
    return construction;
  }

  createArcher() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Archer");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  createSamurai() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Samurai");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  createBerserker() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Berserker");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  createMage() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Mage");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  createAssassin() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Assassin");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  createHorseman() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Horseman");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  createSpy() {
    let factory = new TroopFactory();
    let character = factory.createCharacter("Spy");
    // character.id = "C" + generateRandomNumber(6);
    this.troops.push(character);
    return character;
  }

  saveMemento(): null {
    throw new Error("Method not implemented.");
  }
}
