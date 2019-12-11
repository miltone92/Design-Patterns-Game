var Mage = (function () {
    function Mage() {
        this.type = "Mage";
        this.cost = 10;
        this.healthPoints = 10;
        this.movements = 2;
        this.defense = 3;
        this.attack = 6;
        this.range = 3;
        this.storageCapacity = 2;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-hat-wizard\"></i>";
        this.powerUp = null;
        this.gems = 0;
        this.attacked = false;
        this.movesLeft = 2;
        this.observers = [];
    }
    Mage.prototype.saveMemento = function () {
        return new Memento(this);
    };
    Mage.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    Mage.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You canno't have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return Mage;
}());
//# sourceMappingURL=Mage.js.map