var WhiteGem = (function () {
    function WhiteGem() {
    }
    WhiteGem.prototype.getGem = function () {
        return this.gem;
    };
    WhiteGem.prototype.createGem = function () {
        this.gem = new Gem();
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