var BlueGem = (function () {
    function BlueGem() {
    }
    BlueGem.prototype.getGem = function () {
        throw new Error("Method not implemented.");
    };
    BlueGem.prototype.createGem = function () {
        throw new Error("Method not implemented.");
    };
    BlueGem.prototype.buildColor = function () {
        this.gem.setColor("Blue");
    };
    BlueGem.prototype.buildSprite = function () {
        this.gem.setSprite("<i class=\"far fa-gem\"></i>");
    };
    BlueGem.prototype.buildValue = function () {
        this.gem.setValue(2);
    };
    return BlueGem;
}());
//# sourceMappingURL=BlueGem.js.map