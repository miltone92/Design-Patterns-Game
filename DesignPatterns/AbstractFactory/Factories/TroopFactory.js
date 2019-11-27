var TroopFactory = (function () {
    function TroopFactory() {
    }
    TroopFactory.prototype.createCharacter = function (type) {
        var character;
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
    };
    TroopFactory.prototype.createConstruction = function (type) {
        return type;
    };
    return TroopFactory;
}());
//# sourceMappingURL=TroopFactory.js.map