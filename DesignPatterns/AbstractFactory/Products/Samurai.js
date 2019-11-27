var Samurai = (function () {
    function Samurai() {
        this.type = "Samurai";
        this.cost = 15;
        this.healthPoints = 10;
        this.movements = 2;
        this.defense = 5;
        this.attack = 5;
        this.range = 1;
        this.storageCapacity = 2;
        this.id = "";
        this.owner = "";
        this.sprite = "<i class=\"fas fa-dragon\"></i>";
        this.powerUp = null;
        this.gems = 0;
    }
    Samurai.prototype.saveMemento = function () {
        throw new Error("Method not implemented.");
    };
    return Samurai;
}());
//# sourceMappingURL=Samurai.js.map