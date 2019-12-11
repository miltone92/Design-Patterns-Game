var InventoryManager = (function () {
    function InventoryManager() {
        this.observers = [];
    }
    InventoryManager.prototype.addObserver = function (o) {
        this.observers.push(o);
    };
    InventoryManager.prototype.notifyObservers = function (inventory) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            if (inventory >= 7) {
                o.notify("You cannot have more than 7 characters");
                return true;
            }
        }
        return false;
    };
    return InventoryManager;
}());
//# sourceMappingURL=InventoryManager.js.map