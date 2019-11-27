var Director = (function () {
    function Director() {
    }
    Director.prototype.build = function (builder) {
        builder.createGem();
        builder.buildColor();
        builder.buildSprite();
        builder.buildValue();
    };
    return Director;
}());
//# sourceMappingURL=Director.js.map