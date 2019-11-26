class AttackReduce extends DecoratedCharacter {
  constructor(character) {
    super();
    this.decoratedCharacter = character;
    this.decoratedCharacter.attack -= 2;
  }
}
