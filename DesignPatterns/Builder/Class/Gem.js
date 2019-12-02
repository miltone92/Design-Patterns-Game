var Gem = (function () {
    function Gem() {
    }
    Gem.prototype.getColor = function () {
        return this.color;
    };
    Gem.prototype.getSprite = function () {
        return this.sprite;
    };
    Gem.prototype.getValue = function () {
        return this.value;
    };
    Gem.prototype.setColor = function (color) {
        this.color = color;
    };
    Gem.prototype.setSprite = function (sprite) {
        this.sprite = sprite;
    };
    Gem.prototype.setValue = function (value) {
        this.value = value;
    };
    return Gem;
}());
//# sourceMappingURL=Gem.js.map