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
        this.observers = [];
    }
    Horseman.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Horseman.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Horseman.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Horseman;
}());
//# sourceMappingURL=Horseman.js.map