var ConcreteIterator = (function () {
    function ConcreteIterator(container) {
        this.currentPosition = 0;
        this.container = container;
    }
    ConcreteIterator.prototype.first = function () {
        var obj = null;
        if (this.container.data.length != 0) {
            this.currentPosition = 0;
            obj = this.container.data[0];
        }
        return obj;
    };
    ConcreteIterator.prototype.next = function () {
        var obj = null;
        if (this.currentPosition < this.container.data.length) {
            obj = this.container.data[this.currentPosition];
            this.currentPosition++;
        }
        return obj;
    };
    ConcreteIterator.prototype.current = function () {
        var obj = null;
        if (this.currentPosition < this.container.data.length) {
            obj = this.container.data[this.currentPosition];
        }
        return obj;
    };
    ConcreteIterator.prototype.hasMore = function () {
        var hasMore = false;
        if (this.currentPosition < this.container.data.length) {
            hasMore = true;
        }
        return hasMore;
    };
    return ConcreteIterator;
}());
//# sourceMappingURL=ConcreteIterator.js.map