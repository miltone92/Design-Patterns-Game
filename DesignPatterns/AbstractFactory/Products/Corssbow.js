var Crossbow = (function () {
    function Crossbow() {
        this.type = "Crossbow";
        this.healthPoints = 3;
        this.attack = 2;
        this.range = 2;
        this.cost = 5;
        this.id = "";
        this.owner = "";
    }
    Crossbow.prototype.saveMemento = function () {
        throw new Error("Method not implemented.");
    };
    return Crossbow;
}());
//# sourceMappingURL=Corssbow.js.map