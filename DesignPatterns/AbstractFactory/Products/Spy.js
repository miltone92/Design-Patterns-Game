var Spy = (function () {
    function Spy() {
        this.type = "Spy";
        this.cost = 5;
        this.healthPoints = 2;
        this.movements = 5;
        this.defense = 1;
        this.attack = 1;
        this.range = 3;
        this.storageCapacity = 10;
        this.invisible = false;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-user-secret\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 5;
    }
    Spy.prototype.saveMemento = function () {
        return new Memento(this);
    };
    return Spy;
}());
//# sourceMappingURL=Spy.js.map