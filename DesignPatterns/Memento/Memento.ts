class Memento {
  defense: any;
  attack: any;
  id: any;

  constructor(character: any) {
    this.defense = character.defense;
    this.attack = character.attack;
    this.id = character.id;
  }
}
