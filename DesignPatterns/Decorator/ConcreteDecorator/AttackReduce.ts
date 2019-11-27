class AttackReduce extends DecoratedCharacter {
  constructor(character: any) {
    super();
    this.decoratedCharacter = character;
    this.decoratedCharacter.attack -= 2;
  }
}
