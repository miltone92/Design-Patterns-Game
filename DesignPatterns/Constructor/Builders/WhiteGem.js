var WhiteGem = (function () {
    function WhiteGem() {
    }
    WhiteGem.prototype.getGem = function () {
        throw new Error("Method not implemented.");
    };
    WhiteGem.prototype.createGem = function () {
        throw new Error("Method not implemented.");
    };
    WhiteGem.prototype.buildColor = function () {
        this.gem.setColor("White");
    };
    WhiteGem.prototype.buildSprite = function () {
        this.gem.setSprite("<i class=\"far fa-gem\"></i>");
    };
    WhiteGem.prototype.buildValue = function () {
        this.gem.setValue(1);
    };
    return WhiteGem;
}());
//# sourceMappingURL=WhiteGem.js.map