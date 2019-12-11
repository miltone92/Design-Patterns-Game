var Catapult = (function () {
    function Catapult() {
        this.type = "Catapult";
        this.healthPoints = 3;
        this.attack = 5;
        this.range = 2;
        this.cost = 8;
        this.id = "";
        this.owner = "";
        this.attacked = false;
        this.observers = [];
    }
    Catapult.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Catapult.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Catapult.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Catapult;
}());
//# sourceMappingURL=Catapult.js.map