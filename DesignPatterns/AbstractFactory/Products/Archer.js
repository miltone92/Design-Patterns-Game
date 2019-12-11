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
        this.observers = [];
    }
    Archer.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Archer.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Archer.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Archer;
}());
//# sourceMappingURL=Archer.js.map