var Castle = (function () {
    function Castle() {
        this.type = "Castle";
        this.healthPoints = 30;
        this.gold = 20;
        this.troops = [];
        this.crossbows = [];
        this.catapults = [];
        this.graphic = "<i class=\"fab fa-fort-awesome\"></i>";
    }
    Castle.prototype.createCatapult = function () {
        var factory = new ConstructionFactory();
        var construction = factory.createConstruction("Catapult");
        construction.id = "C" + generateRandomNumber(6);
        this.catapults.push(construction);
        return construction;
    };
    Castle.prototype.createCrossbow = function () {
        var factory = new ConstructionFactory();
        var construction = factory.createConstruction("Corossbow");
        construction.id = "C" + generateRandomNumber(6);
        this.crossbows.push(construction);
        return construction;
    };
    Castle.prototype.createArcher = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Archer");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createSamurai = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Samurai");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createBerserker = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Berserker");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createMage = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Mage");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createAssassin = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Assassin");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createHorseman = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Horseman");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createSpy = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Spy");
        character.id = "C" + generateRandomNumber(6);
        this.troops.push(character);
        return character;
    };
    Castle.prototype.saveMemento = function () {
        throw new Error("Method not implemented.");
    };
    return Castle;
}());
//# sourceMappingURL=Castle.js.map