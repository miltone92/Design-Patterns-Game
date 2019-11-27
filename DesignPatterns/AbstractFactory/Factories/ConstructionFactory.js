var ConstructionFactory = (function () {
    function ConstructionFactory() {
    }
    ConstructionFactory.prototype.createConstruction = function (type) {
        var construction;
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
    };
    ConstructionFactory.prototype.createCharacter = function (type) {
        return type;
    };
    return ConstructionFactory;
}());
//# sourceMappingURL=ConstructionFactory.js.map