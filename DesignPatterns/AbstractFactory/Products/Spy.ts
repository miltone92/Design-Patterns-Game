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

class Spy implements AbstractProduct, Subject {
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
  observers: any[] = [];

  saveMemento(): any {
    return new Memento(this);
  }

  addObserver(o: any) {
    this.observers.push(o);
  }
  notifyObservers(inventory: any) {
    for (const o of this.observers) {
      if (inventory >= 7) {
        o.notify("You canno't have more than 7 characters");
        return true;
      }
    }
    return false;
  }
}
