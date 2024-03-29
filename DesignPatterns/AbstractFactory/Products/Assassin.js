var Assassin = (function () {
    function Assassin() {
        this.type = "Assassin";
        this.cost = 5;
        this.healthPoints = 10;
        this.movements = 4;
        this.defense = 3;
        this.attack = 3;
        this.range = 2;
        this.storageCapacity = 2;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-skull-crossbones\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 4;
    }
    Assassin.prototype.saveMemento = function () {
        return new Memento(this);
    };
    return Assassin;
}());
//# sourceMappingURL=Assassin.js.map