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
        this.observers = [];
    }
    Spy.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Spy.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Spy.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Spy;
}());
//# sourceMappingURL=Spy.js.map