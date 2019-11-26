/*
El único personaje con poder especial es el espía.
El poder especial es el de hacerse invisible
para las tropas enemigas
dando la capacidad de robar de los castillos 
el oro que pueda cargar. 

Su poder se activa de forma automática 
(a las 5 casillas de distancia del castillo, 
el espía se vuelve invisible a los enemigos
para poder robar).

*/

class Spy {
  constructor() {
    this.type = "Spy";
    this.cost = 5;
    this.healthPoints = 2;
    this.movements = 5;
    this.defense = 1;
    this.attack = 1;
    this.range = 3;
    this.storageCapacity = 10;
    this.invisible = false;
    this.id = "";
    this.owner = "";
    this.sprite = `<i class="fas fa-user-secret"></i>`;
    this.powerUp = null;
    this.gems = 0;
  }

  turnInvisible = () => {
    this.invisible = true;
  };

  steal = () => {
    //todo
  };
}
