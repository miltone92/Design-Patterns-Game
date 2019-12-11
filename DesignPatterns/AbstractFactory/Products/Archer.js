var Archer = (function () {
    function Archer() {
        this.type = "Archer";
        this.cost = 10;
        this.healthPoints = 10;
        this.movements = 3;
        this.defense = 3;
        this.attack = 3;
        this.range = 4;
        this.storageCapacity = 2;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-bullseye\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 3;
    }
    Archer.prototype.saveMemento = function () {
        return new Memento(this);
    };
    return Archer;
}());
//# sourceMappingURL=Archer.js.map