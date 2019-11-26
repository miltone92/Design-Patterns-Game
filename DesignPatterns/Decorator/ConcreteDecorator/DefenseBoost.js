class DefenseBoost extends DecoratedCharacter {
  constructor(character) {
    super();
    this.decoratedCharacter = character;
    this.decoratedCharacter.defense += 2;
  }
}
