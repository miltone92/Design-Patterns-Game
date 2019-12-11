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

class Spy implements AbstractProduct {
  type = "Spy";
  cost = 5;
  healthPoints = 2;
  movements = 5;
  defense = 1;
  attack = 1;
  range = 3;
  storageCapacity = 10;
  invisible = false;
  id = "";
  owner = "";
  sprite = `<i class="fas fa-user-secret"></i>`;
  powerUp: any = null;
  gems = 0;
  attacked = false;
  movesLeft = 5;

  saveMemento(): any {
    return new Memento(this);
  }
}
