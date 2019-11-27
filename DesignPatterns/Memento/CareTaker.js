var CareTaker = (function () {
    function CareTaker() {
        this.list = [];
    }
    CareTaker.prototype.add = function (memento) {
        this.list.push(memento);
    };
    CareTaker.prototype.get = function (id) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var memento = _a[_i];
            if (memento.troopId == id) {
                return memento;
            }
        }
    };
    return CareTaker;
}());
//# sourceMappingURL=CareTaker.js.map