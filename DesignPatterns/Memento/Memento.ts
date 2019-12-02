class Memento {
  defense: any;
  attack: any;
  id: any;
  movements: any;
  attacked: any;

  constructor(character: any) {
    this.defense = character.defense;
    this.attack = character.attack;
    this.id = character.id;
    this.movements = character.movements;
    this.attacked = character.attacked;
  }
}
