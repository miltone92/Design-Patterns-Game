var Crossbow = (function () {
    function Crossbow() {
        this.type = "Crossbow";
        this.healthPoints = 3;
        this.attack = 2;
        this.range = 2;
        this.cost = 5;
        this.id = "";
        this.owner = "";
        this.attacked = false;
        this.observers = [];
    }
    Crossbow.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Crossbow.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Crossbow.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Crossbow;
}());
//# sourceMappingURL=Corssbow.js.map