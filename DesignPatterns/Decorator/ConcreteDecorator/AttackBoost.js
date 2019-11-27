var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AttackBoost = (function (_super) {
    __extends(AttackBoost, _super);
    function AttackBoost(character) {
        var _this = _super.call(this) || this;
        _this.decoratedCharacter = character;
        _this.decoratedCharacter.attack += 2;
        return _this;
    }
    return AttackBoost;
}(DecoratedCharacter));
//# sourceMappingURL=AttackBoost.js.map