var Samurai = (function () {
    function Samurai() {
        this.type = "Samurai";
        this.cost = 15;
        this.healthPoints = 10;
        this.movements = 2;
        this.defense = 5;
        this.attack = 5;
        this.range = 1;
        this.storageCapacity = 2;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-dragon\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 2;
        this.observers = [];
    }
    Samurai.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Samurai.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Samurai.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Samurai;
}());
//# sourceMappingURL=Samurai.js.map