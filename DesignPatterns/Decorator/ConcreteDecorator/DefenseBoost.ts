class DefenseBoost extends DecoratedCharacter {
  constructor(character: any) {
    super();
    this.decoratedCharacter = character;
    this.decoratedCharacter.defense += 2;
  }
}
