var GreenGem = (function () {
    function GreenGem() {
    }
    GreenGem.prototype.getGem = function () {
        throw new Error("Method not implemented.");
    };
    GreenGem.prototype.createGem = function () {
        throw new Error("Method not implemented.");
    };
    GreenGem.prototype.buildColor = function () {
        this.gem.setColor("Green");
    };
    GreenGem.prototype.buildSprite = function () {
        this.gem.setSprite("<i class=\"far fa-gem\"></i>");
    };
    GreenGem.prototype.buildValue = function () {
        this.gem.setValue(1);
    };
    return GreenGem;
}());
//# sourceMappingURL=GreenGem.js.map