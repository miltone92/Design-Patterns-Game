var ConcreteContainer = (function () {
    function ConcreteContainer() {
        this.data = [];
    }
    ConcreteContainer.prototype.getIterator = function () {
        return new ConcreteIterator(this);
    };
    ConcreteContainer.prototype.add = function (data) {
        this.data.push(data);
    };
    return ConcreteContainer;
}());
//# sourceMappingURL=ConcreteContainer.js.map