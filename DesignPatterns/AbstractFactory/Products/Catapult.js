var Catapult = (function () {
    function Catapult() {
        this.type = "Catapult";
        this.healthPoints = 3;
        this.attack = 5;
        this.range = 2;
        this.cost = 8;
        this.id = "";
        this.owner = "";
    }
    Catapult.prototype.saveMemento = function () {
        throw new Error("Method not implemented.");
    };
    return Catapult;
}());
//# sourceMappingURL=Catapult.js.map