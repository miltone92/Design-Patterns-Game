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
        this.observers = [];
    }
    Assassin.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Assassin.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Assassin.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Assassin;
}());
//# sourceMappingURL=Assassin.js.map