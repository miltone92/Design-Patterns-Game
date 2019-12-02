var Catapult = (function () {
    function Catapult() {
        this.type = "Catapult";
        this.healthPoints = 3;
        this.attack = 5;
        this.range = 2;
        this.cost = 8;
        this.id = "";
        this.owner = "";
        this.attacked = false;
    }
    Catapult.prototype.saveMemento = function () {
        return new Memento(this);
    };
    return Catapult;
}());
//# sourceMappingURL=Catapult.js.map