var Horseman = (function () {
    function Horseman() {
        this.type = "Horseman";
        this.cost = 15;
        this.healthPoints = 10;
        this.movements = 6;
        this.defense = 4;
        this.attack = 4;
        this.range = 1;
        this.storageCapacity = 6;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-horse\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 6;
    }
    Horseman.prototype.saveMemento = function () {
        return new Memento(this);
    };
    return Horseman;
}());
//# sourceMappingURL=Horseman.js.map