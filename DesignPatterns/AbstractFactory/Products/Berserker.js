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
        this.observers = [];
    }
    Berserker.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Berserker.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Berserker.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Berserker;
}());
//# sourceMappingURL=Berserker.js.map