var Memento = (function () {
    function Memento(character) {
        this.defense = character.defense;
        this.attack = character.attack;
        this.id = character.id;
        this.movements = character.movements;
        this.attacked = character.attacked;
    }
    return Memento;
}());
//# sourceMappingURL=Memento.js.map