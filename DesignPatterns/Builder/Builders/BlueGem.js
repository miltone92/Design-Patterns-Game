var BlueGem = (function () {
    function BlueGem() {
    }
    BlueGem.prototype.getGem = function () {
        return this.gem;
    };
    BlueGem.prototype.createGem = function () {
        this.gem = new Gem();
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