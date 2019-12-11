var Castle = (function () {
    function Castle() {
        this.type = "Castle";
        this.healthPoints = 30;
        this.gold = 90;
        this.troops = [];
        this.crossbows = [];
        this.catapults = [];
        this.graphic = "<i class=\"fab fa-fort-awesome\"></i>";
        this.enemies = [];
    }
    Castle.prototype.createCatapult = function () {
        var factory = new ConstructionFactory();
        var construction = factory.createConstruction("Catapult");
        this.catapults.push(construction);
        return construction;
    };
    Castle.prototype.createCrossbow = function () {
        var factory = new ConstructionFactory();
        var construction = factory.createConstruction("Crossbow");
        this.crossbows.push(construction);
        return construction;
    };
    Castle.prototype.createArcher = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Archer");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createSamurai = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Samurai");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createBerserker = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Berserker");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createMage = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Mage");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createAssassin = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Assassin");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createHorseman = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Horseman");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.createSpy = function () {
        var factory = new TroopFactory();
        var character = factory.createCharacter("Spy");
        this.troops.push(character);
        return character;
    };
    Castle.prototype.saveMemento = function () {
        throw new Error("Method not implemented.");
    };
    return Castle;
}());
//# sourceMappingURL=Castle.js.map