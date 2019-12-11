var Berserker = (function () {
    function Berserker() {
        this.type = "Berserker";
        this.cost = 25;
        this.healthPoints = 15;
        this.movements = 1;
        this.defense = 10;
        this.attack = 10;
        this.range = 2;
        this.storageCapacity = 6;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-paw\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 1;
    }
    Berserker.prototype.saveMemento = function () {
        return new Memento(this);
    };
    return Berserker;
}());
//# sourceMappingURL=Berserker.js.map