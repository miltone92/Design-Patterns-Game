/************************************************************
 * Main setup
 ***********************************************************/

/******************************
 * Alert: Call Boostrap alert on metho
 *****************************/
let callAlert = (type, strong, message) => {
  $("#alertContainer").empty();
  $("#alertContainer").append(`
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>${strong}</strong> ${message}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </div>
    `);
  $(".alert").alert();
};

/******************************
 * Power Up Color Change
 *****************************/

// let hexToRgb = hex => {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16)
//       }
//     : null;
// };

// let changePowerUpColor = () => {
//   let greenValue = hexToRgb("badc58");
//   let grayValue = hexToRgb("485460");

//   let powerUps = $(".powerUp");
//   for (const powerUp of powerUps) {
//     // powerUp.css("border", "3px solid red");
//     if (
//       $(powerUp).css("background-color") ===
//       `rgb(${greenValue.r}, ${greenValue.g}, ${greenValue.b})`
//     ) {
//       powerUp.style.background = `rgb(${grayValue.r}, ${grayValue.g}, ${grayValue.b})`;
//     } else {
//       powerUp.style.background = `rgb(${greenValue.r}, ${greenValue.g}, ${greenValue.b})`;
//     }
//   }

//   // document.getElementById("value").innerHTML = prueba.style.color;
// };

/******************************
 * Tooltip
 *****************************/
let callToolTips = () => {
  $('[data-toggle="tooltip"]').tooltip();
};

/******************************
 * Get a number's length
 *****************************/
let getSmallestNumber = (...numbers) => {
  let smallest;

  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      smallest = numbers[i];
    } else if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  console.log(smallest);
  return smallest;
};

/******************************
 * Get a number's length
 *****************************/
let getNumberLength = number => {
  return number.toString().length;
};
/******************************
 * Generate Random Number
 *****************************/
let generateRandomNumber = length => {
  let number = 1;
  for (let i = 0; i < length; i++) {
    number += "0";
  }
  let random = Math.floor(Math.random() * number);
  return random;
};

/******************************
 * Roll dice
 *****************************/
let rollDice = () => {
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  let number = Math.floor(Math.random() * 6) + 1;

  //save available moves to player
  player.moves = number;
  console.log(player);
  localStorage.setItem(currentPlayer, JSON.stringify(player));

  return number;
};

/************************************************************
 * Board
 ***********************************************************/
let getCurrentRow = cellNumber => {
  let numberLength = getNumberLength(cellNumber);

  if (numberLength > 1 && numberLength < 3) {
    return parseInt(cellNumber.toString()[0]);
  } else if (numberLength == 3) {
    return 10;
  } else {
    return 1;
  }
};

let getCurrentColumn = cellNumber => {
  let numberLength = getNumberLength(cellNumber);

  if (numberLength > 1 && numberLength < 3) {
    let column = parseInt(cellNumber.toString()[1]);
    return column == 0 ? 10 : column;
  } else if (numberLength == 3) {
    return 10;
  } else {
    return cellNumber;
  }
};

//This method expects cell numbers
let getCellDifference = (cellA, cellB) => {
  let difference;

  let cellAColumn = getCurrentColumn(cellA);
  let cellARow = getCurrentRow(cellA);

  let cellBColumn = getCurrentColumn(cellB);
  let cellBRow = getCurrentRow(cellB);

  if (cellAColumn == cellBColumn) {
    difference = Math.abs(cellARow - cellBRow);
  } else if (cellARow == cellBRow) {
    difference = Math.abs(cellAColumn - cellBColumn);
  } else {
    let columnDifference = Math.abs(cellAColumn - cellBColumn);
    let rowDifference = Math.abs(cellARow - cellBRow);
    difference = Math.abs(columnDifference + rowDifference);
  }

  return difference;
};

/******************************
 * Create Grid
 * * source: https://www.w3schools.com/css/css_grid.asp
 *****************************/

/******************************
 * Show possible movements
 *****************************/

let highlightPossibleMoves = (currentCell, availableMovement) => {
  currentCell = parseInt(currentCell);
  availableMovement = parseInt(availableMovement);

  let div = document.getElementById("gameGrid");
  let lis = div.getElementsByTagName("div");

  let leftBreak = false;
  let rightBreak = false;
  let aboveBreak = false;
  let belowBreak = false;

  for (let i = 0; i < availableMovement; i++) {
    //highlight possible cells to the right
    for (const cell of lis) {
      let movePosiblity = parseInt(currentCell) + parseInt(i + 1);
      let cellNumber = $(cell).attr("cellNumber");
      let nextCellToPaint = parseInt(currentCell) + (parseInt(i) + 1);
      if (cellNumber == nextCellToPaint && !rightBreak) {
        $(cell).addClass("availableCell");
      } else if (getCurrentColumn(movePosiblity) == 1 && !rightBreak) {
        //This will make sure no cells get painted once the right border was reached

        rightBreak = true;
      }
    }

    //highlight possible cells to the left
    for (const cell of lis) {
      let movePosiblity = currentCell - (i + 1);
      let cellNumber = $(cell).attr("cellNumber");
      let nextCellToPaint = parseInt(currentCell) - (parseInt(i) + 1);
      if (cellNumber == nextCellToPaint && !leftBreak) {
        $(cell).addClass("availableCell");
      } else if (getCurrentColumn(movePosiblity) == 10 && !leftBreak) {
        //This will make sure no cells get painted once the left border was reached

        leftBreak = true;
      }
    }

    //highlight possible cells above
    for (const cell of lis) {
      let movePosiblity = parseInt(currentCell) + parseInt((i + 1) * -10);

      let cellNumber = $(cell).attr("cellNumber");
      let nextCellToPaint = parseInt(currentCell) + (parseInt(i) + 1) * -10;
      // console.log(cellNumber);
      // console.log(nextCellToPaint);
      if ($(cell).attr("cellNumber") == nextCellToPaint && !aboveBreak) {
        $(cell).addClass("availableCell");

        let newMovement = availableMovement - (i + 1);
        if (newMovement != 0) {
          let cellNumber = $(cell).attr("cellNumber");

          highlightPossibleMoves(cellNumber, newMovement);
        }
      } else if (getCurrentRow(movePosiblity) == 10 && !aboveBreak) {
        //This will make sure no cells get painted once the left border was reached

        aboveBreak = true;
      }
    }

    // //highlight possible cells below

    for (const cell of lis) {
      let movePosiblity = parseInt(currentCell) + (parseInt(i) + 1) * 10;
      let cellNumber = $(cell).attr("cellNumber");
      if (cellNumber == movePosiblity && !belowBreak) {
        $(cell).addClass("availableCell");

        let newMovement = availableMovement - (i + 1);
        if (newMovement != 0) {
          let cellNumber = $(cell).attr("cellNumber");

          highlightPossibleMoves(cellNumber, newMovement);
        }
      } else if (getCurrentRow(movePosiblity) == 10 && !belowBreak) {
        //This will make sure no cells get painted once the left border was reached

        belowBreak = true;
      }
    }
  }
};

/******************************
 * Show attack possiblities
 *****************************/
let highlightPossibleAttacks = (currentCell, availableMovement) => {
  console.log("on attack");
  currentCell = parseInt(currentCell);
  availableMovement = parseInt(availableMovement);
  let currentPlayer = localStorage.getItem("currentPlayer");

  let div = document.getElementById("gameGrid");
  let lis = div.getElementsByTagName("div");

  let leftBreak = false;
  let rightBreak = false;
  let aboveBreak = false;
  let belowBreak = false;

  for (let i = 0; i < availableMovement; i++) {
    //highlight possible cells to the right
    for (const cell of lis) {
      let movePosiblity = parseInt(currentCell) + parseInt(i + 1);
      let cellNumber = $(cell).attr("cellNumber");
      let nextCellToPaint = parseInt(currentCell) + (parseInt(i) + 1);
      let owner = $(cell).attr("owner");
      if (cellNumber == nextCellToPaint && !rightBreak) {
        if (owner && owner != currentPlayer) {
          $(cell).addClass("attackCell");
        }
      } else if (getCurrentColumn(movePosiblity) == 1 && !rightBreak) {
        //This will make sure no cells get painted once the right border was reached

        rightBreak = true;
      }
    }

    //highlight possible cells to the left
    for (const cell of lis) {
      let movePosiblity = currentCell - (i + 1);
      let cellNumber = $(cell).attr("cellNumber");
      let nextCellToPaint = parseInt(currentCell) - (parseInt(i) + 1);
      let owner = $(cell).attr("owner");
      if (cellNumber == nextCellToPaint && !leftBreak) {
        if (owner && owner != currentPlayer) {
          $(cell).addClass("attackCell");
        }
      } else if (getCurrentColumn(movePosiblity) == 10 && !leftBreak) {
        //This will make sure no cells get painted once the left border was reached

        leftBreak = true;
      }
    }

    //highlight possible cells above
    for (const cell of lis) {
      let movePosiblity = parseInt(currentCell) + parseInt((i + 1) * -10);

      let cellNumber = $(cell).attr("cellNumber");
      let nextCellToPaint = parseInt(currentCell) + (parseInt(i) + 1) * -10;
      let owner = $(cell).attr("owner");
      if ($(cell).attr("cellNumber") == nextCellToPaint && !aboveBreak) {
        if (owner && owner != currentPlayer) {
          $(cell).addClass("attackCell");
        }

        let newMovement = availableMovement - (i + 1);
        if (newMovement != 0) {
          let cellNumber = $(cell).attr("cellNumber");

          highlightPossibleAttacks(cellNumber, newMovement);
        }
      } else if (getCurrentRow(movePosiblity) == 10 && !aboveBreak) {
        //This will make sure no cells get painted once the left border was reached

        aboveBreak = true;
      }
    }

    // //highlight possible cells below

    for (const cell of lis) {
      let movePosiblity = parseInt(currentCell) + (parseInt(i) + 1) * 10;
      let cellNumber = $(cell).attr("cellNumber");
      let owner = $(cell).attr("owner");
      if (cellNumber == movePosiblity && !belowBreak) {
        if (owner && owner != currentPlayer) {
          $(cell).addClass("attackCell");
        }

        let newMovement = availableMovement - (i + 1);
        if (newMovement != 0) {
          let cellNumber = $(cell).attr("cellNumber");

          highlightPossibleAttacks(cellNumber, newMovement);
        }
      } else if (getCurrentRow(movePosiblity) == 10 && !belowBreak) {
        //This will make sure no cells get painted once the left border was reached

        belowBreak = true;
      }
    }
  }
};

let removePossibleMoves = () => {
  let gridCells = $("#gameGrid").children();

  for (const cell of gridCells) {
    $(cell).removeClass("availableCell");
  }
};

let removePossibleAttacks = () => {
  let gridCells = $("#gameGrid").children();

  for (const cell of gridCells) {
    $(cell).removeClass("attackCell");
  }
};

let refreshBoard = () => {
  removePossibleAttacks();
  removePossibleMoves();
  playerItemSetup();
  addToolTip();
};

/******************************
 * Add Gems
 *****************************/

let addGemsToGrid = () => {
  // randomCellNumber = Math.floor(Math.random() * 100);

  let div = document.getElementById("gameGrid");

  //get all the div elements within the original div
  let lis = div.getElementsByTagName("div");

  //Add white gems to grid
  for (let i = 0; i < 7; i++) {
    let randomCellNumber = Math.floor(Math.random() * 100);
    //we will check to see if the cell repeated itsel
    //we'll also check if it contains a castle
    if (
      $(lis[randomCellNumber]).hasClass("whiteGemItem") ||
      $(lis[randomCellNumber]).hasClass("powerUp") ||
      $(lis[randomCellNumber]).hasClass("castleItem")
    ) {
      i--;
    } else {
      //if it was not repeated then we'll add class
      $(lis[randomCellNumber]).addClass("whiteGemItem");
    }
  }

  //Add blue gems to grid
  for (let i = 0; i < 5; i++) {
    let randomCellNumber = Math.floor(Math.random() * 100);
    if (
      $(lis[randomCellNumber]).hasClass("whiteGemItem") ||
      $(lis[randomCellNumber]).hasClass("blueGemItem") ||
      $(lis[randomCellNumber]).hasClass("powerUp") ||
      $(lis[randomCellNumber]).hasClass("castleItem")
    ) {
      i--;
    } else {
      $(lis[randomCellNumber]).addClass("blueGemItem");
    }
  }

  //Add green gems to grid
  for (let i = 0; i < 3; i++) {
    let randomCellNumber = Math.floor(Math.random() * 100);
    if (
      $(lis[randomCellNumber]).hasClass("whiteGemItem") ||
      $(lis[randomCellNumber]).hasClass("blueGemItem") ||
      $(lis[randomCellNumber]).hasClass("greenGemItem") ||
      $(lis[randomCellNumber]).hasClass("powerUp") ||
      $(lis[randomCellNumber]).hasClass("castleItem")
    ) {
      i--;
    } else {
      $(lis[randomCellNumber]).addClass("greenGemItem");
    }
  }
};

/******************************
 * Check if landed on gem
 *****************************/

let checkGems = (cell, character) => {
  let gemType;
  if ($(cell).hasClass("whiteGemItem")) {
    gemType = "whiteGemItem";

    $("#modalTitle").empty();
    $("#modalBody").empty();
    $("#modalFooter").empty();

    $("#modalTitle").append(`<i class="far fa-gem"></i> White gem found!`);
    $("#modalBody").append(`
        <p>Would you like too keep the gem?</p>
      `);
    $("#modalFooter").append(`
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="keepGemButton" >Keep</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    `);
    $("#exampleModal").modal(); //Start modal
  }
  if ($(cell).hasClass("greenGemItem")) {
    gemType = "greenGemItem";

    $("#modalTitle").empty();
    $("#modalBody").empty();
    $("#modalFooter").empty();

    $("#modalTitle").append(`<i class="far fa-gem"></i> Green gem found!`);
    $("#modalBody").append(`
        <p>Would you like too keep the gem?</p>
      `);
    $("#modalFooter").append(`
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="keepGemButton" >Keep</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    `);
    $("#exampleModal").modal(); //Start modal
  }
  if ($(cell).hasClass("blueGemItem")) {
    gemType = "blueGemItem";

    $("#modalTitle").empty();
    $("#modalBody").empty();
    $("#modalFooter").empty();

    $("#modalTitle").append(`<i class="far fa-gem"></i> Blue gem found!`);
    $("#modalBody").append(`
        <p>Would you like too keep the gem?</p>
      `);
    $("#modalFooter").append(`
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="keepGemButton" >Keep</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    `);
    $("#exampleModal").modal(); //Start modal
  }
  $(`#keepGemButton`).click(function() {
    keepGem(cell, gemType, character);
  });
};

/******************************
 * Keep gem
 *****************************/

let keepGem = (cell, gemType, character) => {
  /*
   * Design Pattern: Constructor
   */

  let director = new Director();
  let builder;

  $(cell).removeClass(gemType);
  let gem;
  let gemValue;

  switch (gemType) {
    case "whiteGemItem":
      whiteGemBuilder = new WhiteGem();
      director.build(whiteGemBuilder);
      gem = whiteGemBuilder.getGem();
      gemValue = gem.getValue();
      break;
    case "blueGemItem":
      blueGemBuilder = new BlueGem();
      director.build(blueGemBuilder);
      gem = blueGemBuilder.getGem();
      gemValue = gem.getValue();
      break;
    case "greenGemItem":
      greenGemBuilder = new GreenGem();
      director.build(greenGemBuilder);
      gem = greenGemBuilder.getGem();
      gemValue = gem.getValue();
      break;
  }

  character.gems += gemValue;
  if (character.gems >= character.storageCapacity) {
    character.gems = character.storageCapacity;
  }

  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));
  let playerTroops = player.troops;

  for (const troop of playerTroops) {
    if (troop.id == character.id) {
      troop.gems = character.gems;
    }
  }

  localStorage.setItem(currentPlayer, JSON.stringify(player));
  refreshBoard();
  characterMenu(character.id);
};

/******************************
 * Add Power-Ups
 *****************************/

let addPowerUpsToGrid = () => {
  // randomCellNumber = Math.floor(Math.random() * 100);

  let div = document.getElementById("gameGrid");

  //get all the div elements within the original div
  let lis = div.getElementsByTagName("div");

  //Add powerUp to grid
  for (let i = 0; i < 14; i++) {
    let randomCellNumber = Math.floor(Math.random() * 100);
    //we will check to see if the cell repeated itsel
    //we'll also check if it contains a castle
    if (
      $(lis[randomCellNumber]).hasClass("whiteGemItem") ||
      $(lis[randomCellNumber]).hasClass("blueGemItem") ||
      $(lis[randomCellNumber]).hasClass("greenGemItem") ||
      $(lis[randomCellNumber]).hasClass("powerUp") ||
      $(lis[randomCellNumber]).hasClass("castleItem")
    ) {
      i--;
    } else {
      //if it was not repeated then we'll add class
      $(lis[randomCellNumber]).addClass("powerUp");
    }
  }
};

/******************************
 * Check if landed on power up
 *****************************/

let checkPowerUp = (cell, character) => {
  if ($(cell).hasClass("powerUp")) {
    let possibilities = [
      "Boost Attack",
      "Boost Attack",
      "Boost Defense",
      "Boost Defense",
      "Reduce Attack",
      "Reduce Defense"
    ];
    let randomNumber = Math.floor(Math.random() * 6);
    let realType = possibilities[randomNumber];
    let showType;
    if (realType == "Boost Attack" || realType == "Reduce Attack") {
      showType = "Attack";
    } else {
      showType = "Defense";
    }

    $("#modalTitle").empty();
    $("#modalBody").empty();
    $("#modalFooter").empty();

    $("#modalTitle").append(`${showType} Power-Up`);
    $("#modalBody").append(`
        <p>Would you like too keep the power up?</p>
      `);
    $("#modalFooter").append(`
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="keepPowerUpButton" >Keep</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
     `);
    $(`#keepPowerUpButton`).click(function() {
      keepPowerUp(cell, realType, character);
    });
    $("#exampleModal").modal(); //Start modal
  }
};

/******************************
 * Keep power up
 *****************************/

let keepPowerUp = (cell, powerUpType, character) => {
  $(cell).removeClass("powerUp");
  character.powerUp = powerUpType;

  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));
  let playerTroops = player.troops;

  for (const troop of playerTroops) {
    if (troop.id == character.id) {
      troop.powerUp = character.powerUp;
    }
  }

  localStorage.setItem(currentPlayer, JSON.stringify(player));
  characterMenu(character.id);
};

/******************************
 * Add Castles
 *****************************/

let constructionFactory = new ConstructionFactory();
let castles = [];

let addCastles = playerAmount => {
  let div = document.getElementById("gameGrid");
  let lis = div.getElementsByClassName("castleItem");

  //add castles
  for (let i = 0; i < playerAmount; i++) {
    let randomCellNumber = Math.floor(Math.random() * 4);

    if ($(lis[randomCellNumber]).hasClass("activeCastle")) {
      i--;
    } else {
      $(lis[randomCellNumber]).addClass("activeCastle");

      //add casltles to each player's local storage
      castles[i] = constructionFactory.createConstruction("Castle");
      let player = JSON.parse(localStorage.getItem(`player${i + 1}`));
      player.castle = castles[i];
      localStorage.setItem(`player${i + 1}`, JSON.stringify(player));
      $(lis[randomCellNumber]).append(`${castles[i].graphic}`);
      $(lis[randomCellNumber]).attr("owner", `player${i + 1}`);
      $(lis[randomCellNumber]).addClass(`player${i + 1}-item`);
      $(lis[randomCellNumber]).addClass(`playerItem`);
    }
  }
};

//addCastles(2);

/******************************
 * Add Tooltip to player item
 *****************************/

let addToolTip = () => {
  console.log("called");
  let div = document.getElementById("gameGrid");
  let lis = div.getElementsByClassName("playerItem");

  //add castles
  for (const cell of lis) {
    let owner = $(cell).attr("owner");
    let itemType = $(cell).attr("itemType");
    let icon = $(cell).html();

    let invisible = $(cell).attr("invisible");
    if (typeof invisible != typeof undefined && invisible == "true") {
      console.log("nothing");
    } else {
      $(cell).attr("data-toggle", "tooltip");
      $(cell).attr("data-placement", "right");
      $(cell).attr("data-html", "true");

      if ($(cell).attr("troopId")) {
        let playerAmount = localStorage.getItem("playerAmount");
        for (let i = 0; i < playerAmount; i++) {
          let player = JSON.parse(localStorage.getItem("player" + (i + 1)));

          let character;
          for (const troop of player.troops) {
            if (troop.id == $(cell).attr("troopId")) {
              character = troop;
            }
          }
          if (character) {
            $(cell).attr(
              "title",
              `
            ${character.sprite} ${character.type} <br>
            Owner: ${character.owner} <br>
            <br>
            HP: ${character.healthPoints} <br>
            Attack: ${character.attack} <br>
            Defense: ${character.defense} <br>
            Range: ${character.range} <br>
            Movements: ${character.movements} <br>
            Gems: ${character.gems} <br>
            `
            );
            $(cell).attr(
              "data-original-title",
              `
            ${character.sprite} ${character.type} <br>
            Owner: ${character.owner} <br>
            <br>
            HP: ${character.healthPoints} <br>
            Attack: ${character.attack} <br>
            Defense: ${character.defense} <br>
            Range: ${character.range} <br>
            Movements: ${character.movements} <br>
            Gems: ${character.gems} <br>
            `
            );
          }
        }
      } else {
        $(cell).attr(
          "title",
          `
        ${icon} ${itemType} <br>
        Owner: ${owner}`
        );
      }
    }
  }
  callToolTips();
};

/******************************
 * Move character from board to castle
 *****************************/

let enterCastle = () => {
  let selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  //check if character holds gems
  if (selectedCharacter.gems > 0) {
    //ad gold to castle
    player.castle.gold += selectedCharacter.gems;
    selectedCharacter.gems = 0;
  }

  //Add character to castle
  player.castle.troops.push(selectedCharacter);

  //Remove character from players deployed troops
  let index = player.troops.findIndex(x => x.id == selectedCharacter.id);
  if (index > -1) {
    player.troops.splice(index, 1);
    // localStorage.setItem(currentPlayer, JSON.stringify(player));
  }

  localStorage.setItem(currentPlayer, JSON.stringify(player));
  showPlayerData();
};

let enterEnemyCastle = (enemyPlayer, currentEnemy) => {
  let selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  //get enemy castle

  //Add character to enemy castle
  enemyPlayer.castle.enemies.push(selectedCharacter);

  //Remove character from players deployed troops
  let index = player.troops.findIndex(x => x.id == selectedCharacter.id);
  if (index > -1) {
    player.troops.splice(index, 1);
  }

  localStorage.setItem(currentEnemy, JSON.stringify(enemyPlayer));
  localStorage.setItem(currentPlayer, JSON.stringify(player));
  showPlayerData();
};
/******************************
 * Move character from castle to board
 *****************************/

let deployTroop = castleCellNumber => {
  let selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  let possibleMoves = $(`.availableCell`);
  for (const cell of possibleMoves) {
    $(cell).click(function() {
      //Remove character from castle
      let index = player.castle.troops.findIndex(
        x => x.id == selectedCharacter.id
      );
      if (index > -1) {
        player.castle.troops.splice(index, 1);
      }

      //Remove charachter from enemy player castle
      let currentCell = $(`[cellNumber=${castleCellNumber}]`);
      let castleOwner = $(currentCell).attr("owner");
      let enemyPlayer = JSON.parse(localStorage.getItem(castleOwner));

      if (castleOwner != currentPlayer) {
        let index = enemyPlayer.castle.enemies.findIndex(
          x => x.id == selectedCharacter.id
        );
        if (index > -1) {
          enemyPlayer.castle.enemies.splice(index, 1);
        }
        localStorage.setItem(castleOwner, JSON.stringify(enemyPlayer));
      }

      //Add character to players deployed troops
      player.troops.push(selectedCharacter);
      localStorage.setItem(currentPlayer, JSON.stringify(player));

      //Show on board
      $(cell).html(selectedCharacter.sprite);
      $(cell).addClass("playerItem");
      $(cell).addClass("currentPlayerItem");
      $(cell).attr("owner", currentPlayer);
      $(cell).attr("troopId", selectedCharacter.id);
      $(cell).attr("itemType", selectedCharacter.type);

      //Clean board active moves
      removePossibleMoves();

      //Remove on this click function from all other cells
      for (const cell of possibleMoves) {
        //$(cell).off();
        $(cell)
          .prop("onClick", null)
          .off("click");
      }

      //check if desired cell has power up
      checkPowerUp(cell, selectedCharacter);
      checkGems(cell, selectedCharacter);

      //get amount of moves
      let destinationCellNumber = $(cell).attr("cellNumber");
      let cellDifference = getCellDifference(
        castleCellNumber,
        destinationCellNumber
      );

      //update character's moves left
      let playerTroops = player.troops;

      for (const troop of playerTroops) {
        if (troop.id == selectedCharacter.id) {
          troop.movesLeft -= cellDifference;
        }
      }
      localStorage.setItem(currentPlayer, JSON.stringify(player));

      //save character memento to restory movesLeft later (on restoreMoves())
      let troopFactory = new TroopFactory();
      let templateCharacter = troopFactory.createCharacter(
        selectedCharacter.type
      );
      templateCharacter.id = selectedCharacter.id;
      careTaker.add(templateCharacter.saveMemento());

      localStorage.setItem(currentPlayer, JSON.stringify(player));

      //refresh moves left
      updateMovesLeft(cellDifference);

      //refresh board
      refreshBoard();
      //remove selected character
      localStorage.setItem("selectedCharacter", null);

      //update player info
      showPlayerData();

      //refresh castel menu
      castleMenu();
    });
  }
};

/******************************
 * Move character on board
 *****************************/

let moveTroop = currentCell => {
  console.log(currentCell.attr("cellnumber"));
  let selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  let possibleMoves = $(`.availableCell`);
  for (const cell of possibleMoves) {
    $(cell).click(function() {
      let cellOwner = $(cell).attr("owner");
      let cellType = $(cell).attr("itemType");
      let isPlayerItem = $(cell).hasClass("playerItem");

      //get amount of moves traveled
      let destinationCellNumber = $(cell).attr("cellNumber");
      let currentCellNumber = $(currentCell).attr("cellNumber");
      let cellDifference = getCellDifference(
        currentCellNumber,
        destinationCellNumber
      );
      //verify the cell you are moving for is not some else player item
      if (cellOwner != currentPlayer && !isPlayerItem) {
        //remove from current cell
        $(currentCell).html(
          getCurrentColumn($(currentCell).attr("cellNumber"))
        );
        $(currentCell).removeClass("playerItem");
        $(currentCell).removeClass("currentPlayerItem");
        $(currentCell).attr("owner", null);
        $(currentCell).attr("troopId", null);
        $(currentCell).attr("itemType", null);
        $(currentCell).removeAttr("data-toggle", null);
        $(currentCell).removeAttr("data-placement", null);
        $(currentCell).removeAttr("data-html", null);
        $(currentCell).removeAttr("title", null);
        $(currentCell).removeAttr("data-original-title", null);

        //check if desired cell is home castle
        if (cellOwner == currentPlayer && cellType == "castleItem") {
          enterCastle();
          //Remove on this click function from all other cells
          for (const cell of possibleMoves) {
            //$(cell).off();
            $(cell)
              .prop("onClick", null)
              .off("click");
          }

          //update character's moves left
          let playerTroops = player.troops;

          for (const troop of playerTroops) {
            if (troop.id == selectedCharacter.id) {
              troop.movesLeft -= cellDifference;
            }
          }

          localStorage.setItem(currentPlayer, JSON.stringify(player));

          //save character memento to restory movesLeft later (on restoreMoves())
          let troopFactory = new TroopFactory();
          let templateCharacter = troopFactory.createCharacter(
            selectedCharacter.type
          );
          templateCharacter.id = selectedCharacter.id;
          careTaker.add(templateCharacter.saveMemento());

          //refresh moves left
          updateMovesLeft(cellDifference);

          //refresh board
          refreshBoard();

          //refresh castle menu
          castleMenu();

          //remove selected character
          localStorage.setItem("selectedCharacter", null);

          //update player info
          showPlayerData();

          // if desired cell is not home castle
        } else {
          //Show on board
          $(cell).html(selectedCharacter.sprite);
          $(cell).addClass("playerItem");
          $(cell).addClass("currentPlayerItem");
          $(cell).attr("owner", currentPlayer);
          $(cell).attr("troopId", selectedCharacter.id);
          $(cell).attr("itemType", selectedCharacter.type);

          //Clean board active moves
          // removePossibleMoves();

          //Remove on this click function from all other cells
          for (const cell of possibleMoves) {
            //$(cell).off();
            $(cell)
              .prop("onClick", null)
              .off("click");
          }

          //check if desired cell has power up
          checkPowerUp(cell, selectedCharacter);
          checkGems(cell, selectedCharacter);

          //update character's moves left
          let playerTroops = player.troops;

          for (const troop of playerTroops) {
            if (troop.id == selectedCharacter.id) {
              troop.movesLeft -= cellDifference;
            }
          }
          localStorage.setItem(currentPlayer, JSON.stringify(player));

          //save character memento to restory movesLeft later (on restoreMoves())
          let troopFactory = new TroopFactory();
          let templateCharacter = troopFactory.createCharacter(
            selectedCharacter.type
          );
          templateCharacter.id = selectedCharacter.id;
          careTaker.add(templateCharacter.saveMemento());

          //refresh moves left
          updateMovesLeft(cellDifference);

          //refresh board
          refreshBoard();

          characterMenu(selectedCharacter.id);

          //remove selected character
          localStorage.setItem("selectedCharacter", null);

          //update player info
          showPlayerData();
        }
      } // 1) if your selected player is a SPY
      // 2)if the cell you are moving into is an enemy castle
      //Enter enemy castle
      else if (
        cellOwner != currentPlayer &&
        cellType == "castleItem" &&
        selectedCharacter.type == "Spy"
      ) {
        //remove from current cell
        $(currentCell).html(
          getCurrentColumn($(currentCell).attr("cellNumber"))
        );
        $(currentCell).removeClass("playerItem");
        $(currentCell).removeClass("currentPlayerItem");
        $(currentCell).attr("owner", null);
        $(currentCell).attr("troopId", null);
        $(currentCell).attr("itemType", null);
        $(currentCell).removeAttr("data-toggle", null);
        $(currentCell).removeAttr("data-placement", null);
        $(currentCell).removeAttr("data-html", null);
        $(currentCell).removeAttr("title", null);
        $(currentCell).removeAttr("data-original-title", null);

        let enemyOwner = $(cell).attr("owner");
        let enemyPlayer = JSON.parse(localStorage.getItem(enemyOwner));

        enterEnemyCastle(enemyPlayer, enemyOwner);
        //Remove on this click function from all other cells
        for (const cell of possibleMoves) {
          //$(cell).off();
          $(cell)
            .prop("onClick", null)
            .off("click");
        }

        //refresh moves left
        updateMovesLeft(cellDifference);
        //refresh board
        refreshBoard();
        //update player info
        showPlayerData();
        //enemy castle menu
        enemyCastleMenu(enemyOwner, currentCell);
      } else {
        callAlert("warning", "Woops ", "You cannot move into a player's item");
        //Remove on this click function from all other cells
        for (const cell of possibleMoves) {
          //$(cell).off();
          $(cell)
            .prop("onClick", null)
            .off("click");
        }
        //refresh board
        refreshBoard();
        //refresh castle menu
        castleMenu();
      }
    });
  }
};

/******************************
 * Attack enemy
 *****************************/

let attack = (currentCell, character) => {
  let selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  let possibleAttacks = $(`.attackCell`);
  for (const cell of possibleAttacks) {
    $(cell).click(function() {
      //save character memento to restory attack boolean later on restoreCharacteStats())
      let troopFactory = new TroopFactory();
      let templateCharacter = troopFactory.createCharacter(character.type);
      templateCharacter.id = character.id;
      careTaker.add(templateCharacter.saveMemento());
      character.attacked = true;

      //update character's attacked status
      let playerTroops = player.troops;

      for (const troop of playerTroops) {
        if (troop.id == character.id) {
          troop.attacked = true;
        }
      }
      localStorage.setItem(currentPlayer, JSON.stringify(player));

      //Get enemyPlayer and enemy character or castle

      let enemyOwner = $(cell).attr("owner");
      let enemyPlayer = JSON.parse(localStorage.getItem(enemyOwner));

      //if enemy == castle
      if ($(cell).attr("itemType") == "castleItem") {
        let enemyCastle = enemyPlayer.castle;

        //reduce HP

        enemyCastle.healthPoints -= character.attack;

        //check to see if enemy castle died
        if (enemyCastle.healthPoints <= 0) {
          enemyPlayer.castle = "Destroyed";
          localStorage.setItem(enemyOwner, JSON.stringify(enemyPlayer));

          //remove from board
          $(cell).html(null);
          $(cell).removeClass("playerItem");
          $(cell).attr("owner", null);
          $(cell).attr("itemType", null);
          $(currentCell).removeAttr("data-toggle", null);
          $(currentCell).removeAttr("data-placement", null);
          $(currentCell).removeAttr("data-html", null);
          $(currentCell).removeAttr("title", null);
          $(currentCell).removeAttr("data-original-title", null);
        }

        localStorage.setItem(enemyOwner, JSON.stringify(enemyPlayer));

        //Remove on this click function from all other cells
        for (const cell of possibleAttacks) {
          //$(cell).off();
          $(cell)
            .prop("onClick", null)
            .off("click");
        }
        //refresh board
        refreshBoard();

        //call menu
        characterMenu(character.id);
      } //if enemy == troop
      else {
        let enemyTroopId = $(cell).attr("troopId");
        let enemyTroops = enemyPlayer.troops;
        let enemyTroop;

        for (const troop of enemyTroops) {
          if (troop.id == enemyTroopId) {
            enemyTroop = troop;
          }
        }

        //Now reduce defense and HP to enemy character
        if (enemyTroop) {
          let impact = enemyTroop.defense - character.attack;
          //reduce defense
          enemyTroop.defense -= character.attack;
          if (enemyTroop.defense < 0) {
            enemyTroop.defense = 0;
          }
          //reduce HP
          if (impact < 0) {
            enemyTroop.healthPoints += impact;

            //check to see if enemy character died
            if (enemyTroop.healthPoints <= 0) {
              //Remove enemy character from players enemy troops
              let index = enemyPlayer.troops.findIndex(
                x => x.id == enemyTroop.id
              );
              if (index > -1) {
                enemyPlayer.troops.splice(index, 1);
                localStorage.setItem(enemyOwner, JSON.stringify(enemyPlayer));
              }
              //remove from board
              $(cell).html(null);
              $(cell).removeClass("playerItem");
              $(cell).removeClass("currentPlayerItem");
              $(cell).attr("owner", null);
              $(cell).attr("troopId", null);
              $(cell).attr("itemType", null);
              $(currentCell).removeAttr("data-toggle", null);
              $(currentCell).removeAttr("data-placement", null);
              $(currentCell).removeAttr("data-html", null);
              $(currentCell).removeAttr("title", null);
              $(currentCell).removeAttr("data-original-title", null);
            }
          }
          localStorage.setItem(enemyOwner, JSON.stringify(enemyPlayer));

          //Remove on this click function from all other cells
          for (const cell of possibleAttacks) {
            //$(cell).off();
            $(cell)
              .prop("onClick", null)
              .off("click");
          }
          //refresh board
          refreshBoard();

          //call menu
          characterMenu(character.id);
        } // end of if(enemyTroop)
      }
    });
  }
};

/******************************
 * Attack enemy from castle
 *****************************/
let attackFromCastle = character => {
  let selectedCharacter = JSON.parse(localStorage.getItem("selectedCharacter"));
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));

  let possibleAttacks = $(`.attackCell`);
  for (const cell of possibleAttacks) {
    $(cell).click(function() {
      //save character memento to restory attack boolean later on restoreCharacteStats())
      let constructionFactory = new ConstructionFactory();
      let templateCharacter = constructionFactory.createConstruction(
        character.type
      );
      templateCharacter.id = character.id;
      careTaker.add(templateCharacter.saveMemento());
      character.attacked = true;

      //update character's attacked status
      for (const construction of player.castle.catapults) {
        if (construction.id == character.id) {
          construction.attacked = true;
        }
      }
      for (const construction of player.castle.crossbows) {
        if (construction.id == character.id) {
          construction.attacked = true;
        }
      }
      localStorage.setItem(currentPlayer, JSON.stringify(player));

      //Get enemyPlayer and enemy character
      let enemyOwner = $(cell).attr("owner");
      let enemyPlayer = JSON.parse(localStorage.getItem(enemyOwner));

      let enemyTroopId = $(cell).attr("troopId");
      let enemyTroops = enemyPlayer.troops;
      let enemyTroop;

      for (const troop of enemyTroops) {
        if (troop.id == enemyTroopId) {
          enemyTroop = troop;
        }
      }

      //Now reduce defense and HP to enemy character
      if (enemyTroop) {
        let impact = enemyTroop.defense - character.attack;
        //reduce defense
        enemyTroop.defense -= character.attack;
        if (enemyTroop.defense < 0) {
          enemyTroop.defense = 0;
        }
        //reduce HP
        if (impact < 0) {
          enemyTroop.healthPoints += impact;

          //check to see if enemy character died
          if (enemyTroop.healthPoints <= 0) {
            //Remove enemy character from players enemy troops
            let index = enemyPlayer.troops.findIndex(
              x => x.id == enemyTroop.id
            );
            if (index > -1) {
              enemyPlayer.troops.splice(index, 1);
              localStorage.setItem(enemyOwner, JSON.stringify(enemyPlayer));
            }
            //remove from board
            $(cell).html(null);
            $(cell).removeClass("playerItem");
            $(cell).removeClass("currentPlayerItem");
            $(cell).attr("owner", null);
            $(cell).attr("troopId", null);
            $(cell).attr("itemType", null);
            // $(currentCell).removeAttr("data-toggle", null);
            // $(currentCell).removeAttr("data-placement", null);
            // $(currentCell).removeAttr("data-html", null);
            // $(currentCell).removeAttr("title", null);
            // $(currentCell).removeAttr("data-original-title", null);
          }

          localStorage.setItem(enemyOwner, JSON.stringify(enemyPlayer));

          //Remove on this click function from all other cells
          for (const cell of possibleAttacks) {
            //$(cell).off();
            $(cell)
              .prop("onClick", null)
              .off("click");
          }
          //refresh board
          refreshBoard();
          castleMenu();
        } // end of if(enemyTroop)
      }
    });
  }
};

/************************************************************
 * Player characters
 ***********************************************************/

let assignOwner = character => {
  let currentPlayer = localStorage.getItem("currentPlayer");
  let player = JSON.parse(localStorage.getItem(currentPlayer));
  let troops = player.castle.troops;

  for (const troop of troops) {
    if (troop.id == character.id) {
      troop.owner = currentPlayer;
    }
  }

  localStorage.setItem(currentPlayer, JSON.stringify(player));
};

let usePowerUp = (character, player) => {
  let currentPlayer = localStorage.getItem("currentPlayer");

  //call the factory to get character prototypes
  let troopFactory = new TroopFactory();
  let templateCharacter = troopFactory.createCharacter(character.type);
  templateCharacter.id = character.id;

  //Save character memento before using power up
  careTaker.add(templateCharacter.saveMemento());

  //Decorate the character to provide power up
  let decoratedCharacter;
  switch (character.powerUp) {
    case "Boost Attack":
      decoratedCharacter = new AttackBoost(character);
      break;
    case "Reduce Attack":
      decoratedCharacter = new AttackReduce(character);
      break;
    case "Boost Defense":
      decoratedCharacter = new DefenseBoost(character);
      break;
    case "Reduce Defense":
      decoratedCharacter = new DefenseReduce(character);
      break;
  }

  decoratedCharacter = decoratedCharacter.decoratedCharacter;
  character = decoratedCharacter;
  console.log(character);
  character.powerUp = null;
  localStorage.setItem(currentPlayer, JSON.stringify(player));
  characterMenu(character.id);
};

let checkSpies = () => {
  //Get current player castle
  let currentPlayer = localStorage.getItem("currentPlayer");
  let currentCastle;
  let castles = $(`[itemType = castleItem]`);

  for (const div of castles) {
    if ($(div).attr("owner") == currentPlayer) {
      currentCastle = div;
    }
  }
  let currentCastleNumber = $(currentCastle).attr("cellnumber");

  //Get all spies
  let spies = $("[itemType = Spy]");

  //Create template spy
  let troopFactory = new TroopFactory();
  let templateCharacter = troopFactory.createCharacter("Spy");

  //manage board spies
  for (const spy of spies) {
    let spyCellNumber = $(spy).attr("cellNumber");

    //if spy is current player spy
    if ($(spy).hasClass("currentPlayerItem")) {
      $(spy).html(`${templateCharacter.sprite}`);
      $(spy).attr("invisible", "false");
    } else {
      //else if spy is near castle turn them invisible
      let distance = getCellDifference(currentCastleNumber, spyCellNumber);
      if (distance <= 5) {
        $(spy).html(getCurrentColumn($(spy).attr("cellNumber")));
        $(spy).attr("invisible", "true");
        $(spy).removeAttr("data-toggle", null);
        $(spy).removeAttr("data-placement", null);
        $(spy).removeAttr("data-html", null);
        $(spy).removeAttr("title", null);
        $(spy).removeAttr("data-original-title", null);
      }
    }
  }
};

/************************************************************
 * Dashboard Setup
 ***********************************************************/

/******************************
 * Player stats
 *****************************/
let showPlayerData = () => {
  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));

  $("#currentPlayerData").empty();
  $("#currentPlayerData").append(`
      <div>
        <div class="accordionMenu">
        <li class="item">
        <a  id="" class="sidemenuButton ">
        <i class="fas fa-user"></i> ${currentPlayer}
        </a>
        </li>
        <li class="item">
        <a  id="" class="sidemenuButton ">
        <i class="fas fa-money-bill-alt"></i> ${player.castle.gold}
        </a>
        </li>
        <li class="item">
          <a  id="" class="sidemenuButton ">
            <i class="fas fa-dice"></i>  ${player.moves}
          </a>
        </li>
      
     
          <li class="item">
            <a href="#" id="endTurnButton" class="sidemenuButton timer">
            <i class="fas fa-hourglass-half"></i> 00:00 
            </a>
            <div class="subMenu" id="endTurnSubMenu">
              <a href="#crossbowSubMenu">
                <div>
                  <i class="fas fa-hourglass-end"></i>
                </div>
                <div> 
                  End turn
                </div>
              </a>
            </div>
          </li>
        </div>
         
  
        <br>
      </div>
    `);
  $(`#endTurnButton, #endTurnSubMenu`).click(function() {
    changeTurn();
  });
};

/******************************
 * Item menus
 *****************************/

let enemyCastleMenu = (castleOwner, currentCell) => {
  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));

  //Show dashboard and hide the openSlideButton
  $(`.side-nav`).css("margin-left", "0");
  $(`#openSlideButton`).hide();

  //Empty menu
  $("#selectedItemData").empty();

  //get enemy player
  let enemyPlayer = JSON.parse(localStorage.getItem(`${castleOwner}`));
  let enemyCastle = enemyPlayer.castle;

  //get current cell number
  let currentCellNumber = $(currentCell).attr("cellnumber");

  //Castle data
  $("#selectedItemData").append(
    `<div id="itemAttributes" class="accordionMenu"></div>`
  );
  $("#selectedItemData").append(
    `<div id="itemMethods" class="accordionMenu"></div>`
  );
  $("#itemAttributes").append(`
  <div class="enemyCastleStats">
    <p>
      ${enemyCastle.graphic} Enemy Castle
    </p>
    <p>
      <i class="fas fa-heart"></i> ${enemyCastle.healthPoints}
    </p>
    <p>
      <i class="fas fa-money-bill-alt"></i> ${enemyCastle.gold}
    </p>
  </div>
  <li class="item" id="spies">
    <a class="sidemenuButton">
      <i class="fas fa-user-secret"></i> Spies: ${enemyCastle.enemies.length}
    </a>
  </li>
    `);
  /*******************
 * SPY
 /*******************/
  $("#spies").append(`
  <div class="subMenu" id="spiesSubMenu"></div>
  `);
  for (const character of enemyPlayer.castle.enemies) {
    randomIndex = generateRandomNumber(5);
    $("#spiesSubMenu").append(`
          <a href="#spiesSubMenu">
            <div class="spy${randomIndex}">
              ${character.sprite}
         
              <i class="fas fa-heart"></i> ${character.healthPoints} 
            </div>
           
            <div class="spy${randomIndex}">
            <i class="fas fa-boxes"></i>  ${character.storageCapacity}
           
            <i class="far fa-gem"></i>  ${character.gems}
            </div>
          </a>
    `);
    $(`.spy${randomIndex}`).click(function() {
      //steal gold
      let stealableAmount = character.storageCapacity - character.gems;

      if (enemyPlayer.castle.gold > stealableAmount) {
        enemyPlayer.castle.gold -= stealableAmount;
        character.gems += stealableAmount;
      } else {
        enemyPlayer.castle.gold -= enemyPlayer.castle.gold;
        character.gems += enemyPlayer.castle.gold;
      }

      localStorage.setItem(castleOwner, JSON.stringify(enemyPlayer));
      localStorage.setItem(currentPlayer, JSON.stringify(player));
      enemyCastleMenu(castleOwner, currentCell);
      //move / deploy
      if (player.moves > 0 && character.movesLeft > 0) {
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(character));
        //clean board
        removePossibleMoves();
        //highlight possible moves
        ////Define available moves
        let smallest = getSmallestNumber(player.moves, character.movesLeft);
        highlightPossibleMoves(currentCellNumber, smallest);
        //add event listener to possible moves
        deployTroop(currentCellNumber);
      } else {
        callAlert("warning", "Woops ", "You don't have any moves left!");
      }
    });
  }
}; //End enemyCastleMenu()

let castleMenu = () => {
  //Show dashboard and hide the openSlideButton
  $(`.side-nav`).css("margin-left", "0");
  $(`#openSlideButton`).hide();

  //Fill dashboar
  $("#selectedItemData").empty();
  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));

  //Create castle
  let constructionFactory = new ConstructionFactory();
  let castle = constructionFactory.createConstruction("Castle");

  //get current cell number
  let currentCell;
  let castles = $(`[itemType = castleItem]`);

  for (const div of castles) {
    if ($(div).attr("owner") == currentPlayer) {
      currentCell = div;
    }
  }
  let currentCellNumber = $(currentCell).attr("cellnumber");

  //Assign player values to the castle. Note* this allows us to be able to use castle methods
  castle.catapults = player.castle.catapults;
  castle.crossbows = player.castle.crossbows;
  castle.gold = player.castle.gold;
  castle.graphic = player.castle.graphic;
  castle.healthPoints = player.castle.healthPoints;
  castle.troops = player.castle.troops;
  castle.type = player.castle.type;

  //get constructions lenghts

  let catapultsLength = player.castle.catapults.length;
  let crossbowsLenght = player.castle.crossbows.length;
  let constructionLength = catapultsLength + crossbowsLenght;
  //Get troop length
  let troopsLength = player.castle.troops.length;

  /*******************
     * Castle attributes
     /*******************/

  //Castle data
  $("#selectedItemData").append(
    `<div id="itemAttributes" class="accordionMenu"></div>`
  );
  $("#selectedItemData").append(
    `<div id="itemMethods" class="accordionMenu"></div>`
  );
  $("#itemAttributes").append(`
  <div class="castleStats">
        <p>
        ${castle.graphic} Castle
        </p>
        <p>
        <i class="fas fa-heart"></i> ${castle.healthPoints}
        </p>
      </div>
 
        <li class="item" id="castleConsturctions">
        <a class="sidemenuButton">
          <i class="fas fa-university"></i>  Constructions:  ${castle.crossbows
            .length + castle.catapults.length}
        </a>
      </li>
        <li class="item" id="castleTroops">
          <a class="sidemenuButton">
            <i class="fas fa-male"></i> Troops: ${castle.troops.length}
          </a>
        </li>
    
       
    `);
  /*******************
     * Castle Troops
     /*******************/
  $("#castleTroops").append(`
    <div class="subMenu" id="castleTroopsSubMenu">
    </div>
    `);

  for (const character of player.castle.troops) {
    randomIndex = generateRandomNumber(5);
    $("#castleTroopsSubMenu").append(`
          <a href="#castleTroopsSubMenu">
            <div id="character${randomIndex}">
              <i class="fas fa-male"></i> ${character.type}
              <br> 
              <i class="fas fa-heart"></i> ${character.healthPoints}
            </div>
          </a>
    `);
    $(`#character${randomIndex}`).click(function() {
      if (player.moves != 0) {
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(character));
        //clean board
        removePossibleMoves();
        //highlight possible moves
        ////Define available moves
        let smallest = getSmallestNumber(player.moves, character.movesLeft);
        highlightPossibleMoves(currentCellNumber, smallest);
        //add event listener to possible moves
        deployTroop(currentCellNumber);
      } else {
        callAlert("warning", "Woops ", "You don't have any moves left!");
      }
    });
  }
  /*******************
     * Castle Constructions
     /*******************/
  $("#castleConsturctions").append(`
     <div class="subMenu" id="castleConsturctionsSubMenu">
     </div>
     `);

  for (const construction of player.castle.catapults) {
    randomIndex = generateRandomNumber(5);
    $("#castleConsturctionsSubMenu").append(`
           <a href="#castleTroopsSubMenu">
             <div id="construction${randomIndex}">
               <i class="fas fa-male"></i> ${construction.type}
               <br> 
               <i class="fas fa-heart"></i> ${construction.healthPoints}
             </div>
           </a>
     `);

    $(`#construction${randomIndex}`).click(function() {
      //**** Attack ****/
      if (!construction.attacked) {
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(construction));

        //clean board
        removePossibleAttacks();

        //highlight possible attack
        highlightPossibleAttacks(currentCellNumber, construction.range);

        attackFromCastle(construction);
      } else {
        callAlert("warning", "Woops ", "Catapult already attacked!");
      }
    });
  }
  for (const construction of player.castle.crossbows) {
    randomIndex = generateRandomNumber(5);
    $("#castleConsturctionsSubMenu").append(`
          <a href="#castleTroopsSubMenu">
            <div id="construction${randomIndex}">
              <i class="fas fa-male"></i> ${construction.type}
              <br> 
              <i class="fas fa-heart"></i> ${construction.healthPoints}
            </div>
          </a>
    `);

    $(`#construction${randomIndex}`).click(function() {
      //**** Attack ****/
      if (!construction.attacked) {
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(construction));

        //clean board
        removePossibleAttacks();

        //highlight possible attack
        highlightPossibleAttacks(currentCellNumber, construction.range);

        attackFromCastle(construction);
      } else {
        callAlert("warning", "Woops ", "Crossbow already attacked!");
      }
    });
  }

  /*******************
     * Castle methods
     /*******************/

  //Cataputls
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createCatapult" class="sidemenuButton">
          <i class="fas fa-university"></i> Create Catapult
        </a> 
        <div class="subMenu" id="catapultSubMenu">
          <a href="#catapultSubMenu">
            <div>
              <i class="fas fa-heart"></i> 3 
              <br> 
              <i class="fas fa-money-bill-alt"></i> 8
            </div>
            <div>
              Attack: 5
              <br> 
              Range: 2
            </div>
          </a>
        </div>
      </li>
        
    `);
  $("#createCatapult, #catapultSubMenu").click(function() {
    if (constructionLength >= 3) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have three constructions at a time!"
      );
    } else {
      let construction = castle.createCatapult();
      construction.id = "C" + generateRandomNumber(6);
      if (player.castle.gold >= construction.cost) {
        //update player's gold
        updateGoldLeft(construction.cost);
        //refresh player date
        showPlayerData();
        //add spinner
        $("#createCatapult").append(`
        <span id="spinner${construction.id}" class="spinner spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        `);
        setTimeout(function() {
          player.castle = castle;
          localStorage.setItem(currentPlayer, JSON.stringify(player));
          //Assign owner
          construction.owner = currentPlayer;
          assignOwner(construction);

          //remove spinner
          $(`#spinner${construction.id}`).remove();

          //refresh castle menu
          castleMenu();
        }, 30000);
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Crossbow
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createCrossbow" class="sidemenuButton">
          <i class="fas fa-university"></i> Create Crossbow
        </a>
        <div class="subMenu" id="crossbowSubMenu">
          <a href="#crossbowSubMenu">
            <div>
              <i class="fas fa-heart"></i> 3  <br><i class="fas fa-money-bill-alt"></i> 5
            </div>
           
            <div> 
              Attack: 2 <br>Range: 2
            </div>
          </a>
        </div>
      </li>
    `);
  $("#createCrossbow, #crossbowSubMenu").click(function() {
    if (constructionLength >= 3) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have three constructions at a time!"
      );
    } else {
      let construction = castle.createCrossbow();
      construction.id = "C" + generateRandomNumber(6);
      if (player.castle.gold >= construction.cost) {
        //update player's gold
        updateGoldLeft(construction.cost);
        //refresh player date
        showPlayerData();
        //add spinner
        $("#createCrossbow").append(`
        <span id="spinner${construction.id}" class="spinner spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        `);
        setTimeout(function() {
          player.castle = castle;
          localStorage.setItem(currentPlayer, JSON.stringify(player));
          //Assign owner
          construction.owner = currentPlayer;
          assignOwner(construction);

          //remove spinner
          $(`#spinner${construction.id}`).remove();

          //refresh castle menu

          castleMenu();
        }, 30000);
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Archer
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createArcher" class="sidemenuButton">
          <i class="fas fa-bullseye"></i> Create Archer
        </a> 
        <div class="subMenu" id="archerSubMenu">
          <a href="#archerSubMenu">
              <div>
                <i class="fas fa-heart"></i> 10 <i class="fas fa-money-bill-alt"></i> 10 <i class="fas fa-boxes"></i> 2
              </div>
              <div>
                Attack: 3 Defense: 3 Movement: 3 Range: 4</div>
              </div>
          </a>
        </div>
      </li>
    `);
  $("#createArcher, #archerSubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createArcher();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Assassin
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createAssassin" class="sidemenuButton">
          <i class="fas fa-skull-crossbones"></i> Create Assasssin
        </a> 
        <div class="subMenu" id="assassinSubMenu">
          <a href="#assassinSubMenu">
            <div>
              <i class="fas fa-heart"></i> 10 
              <i class="fas fa-money-bill-alt"></i> 5 
              <i class="fas fa-boxes"></i> 2
            </div>
            <div>
              Attack: 3 Defense: 3 Movement: 4 Range: 2</div>
            </div>
            
          </a>
        </div>
      </li>
    `);
  $("#createAssassin, #assassinSubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createAssassin();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Berseker
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createBerserker" class="sidemenuButton">
          <i class="fas fa-paw"></i> Create Berserker
        </a>
        <div class="subMenu" id="bersekerSubMenu">
          <a href="#bersekerSubMenu">
            <div>
              <i class="fas fa-heart"></i> 15 <i class="fas fa-money-bill-alt"></i> 25 <i class="fas fa-boxes"></i> 6
            </div>
            <div>
              Attack: 10 Defense: 10 Movement: 1 Range: 2</div>
            </div>
          </a>
        </div>
      </li>
    `);
  $("#createBerserker, #bersekerSubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createBerserker();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Horseman
  $("#itemMethods").append(`
    <li class="item">
      <a href="#" id="createHorseman" class="sidemenuButton">
        <i class="fas fa-horse"></i> Create Horseman
      </a>
      <div class="subMenu" id="horsemanSubMenu">
        <a href="#horsemanSubMenu">
          <div>
            <i class="fas fa-heart"></i> 10 <i class="fas fa-money-bill-alt"></i> 15 <i class="fas fa-boxes"></i> 6
          </div>
          <div>
            Attack: 4 Defense: 4 Movement: 6 Range: 1</div>
          </div>
        </a>
      </div>
    </li>
    `);
  $("#createHorseman, #horsemanSubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createHorseman();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Mage
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createMage" class="sidemenuButton">
          <i class="fas fa-hat-wizard"></i> Create Mage
        </a> 
        <div class="subMenu" id="mageSubMenu">
          <a href="#mageSubMenu, #mageSubMenu">
            <div>
              <i class="fas fa-heart"></i> 10 
              <i class="fas fa-money-bill-alt"></i> 10 
              <i class="fas fa-boxes"></i> 2
            </div>
            <div>
              Attack: 6 Defense: 3 Movement: 2 Range: 3</div>
            </div>
          </a>
        </div>
      </li>
    `);
  $("#createMage, #mageSubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createMage();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Samurai
  $("#itemMethods").append(`
     <li class="item">
       <a href="#" id="createSamurai" class="sidemenuButton">
         <i class="fas fa-dragon"></i> Create Samurai
       </a> 
       <div class="subMenu" id="samuraiSubMenu">
         <a href="#samuraiSubMenu">
           <div>
             <i class="fas fa-heart"></i> 10 <i class="fas fa-money-bill-alt"></i> 15 <i class="fas fa-boxes"></i> 2
           </div>
           <div>
             Attack: 5 Defense: 5 Movement: 2 Range: 1</div>
           </div>
         </a>
       </div>
     </li>
   `);
  $("#createSamurai, #samuraiSubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createSamurai();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });

  //Spy
  $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="createSpy" class="sidemenuButton">
          <i class="fas fa-user-secret"></i> Create Spy
        </a>
        <div class="subMenu" id="spySubMenu">
          <a href="#spySubMenu">
            <div>
              <i class="fas fa-heart"></i> 2 
              <i class="fas fa-money-bill-alt"></i> 5 
              <i class="fas fa-boxes"></i> 10
            </div>
            <div>
              Attack: 1 Defense: 1 Movement: 5 Range: 3
            </div>
          </a>
        </div>
      </li>
    `);
  $("#createSpy, #spySubMenu").click(function() {
    if (troopsLength >= 7) {
      callAlert(
        "danger",
        "Wooops",
        "You can only have seven troops at a time!"
      );
    } else {
      //create character
      let character = castle.createSpy();
      character.id = "C" + generateRandomNumber(6);
      //check gold
      if (player.castle.gold >= character.cost) {
        //Add character to player
        player.castle = castle;
        localStorage.setItem(currentPlayer, JSON.stringify(player));
        //Assign owner
        character.owner = currentPlayer;
        assignOwner(character);
        //update player's gold
        updateGoldLeft(character.cost);
        //refresh player date
        showPlayerData();
        //refresh castle menu
        castleMenu();
      } else {
        callAlert("warning", "Woops ", "You don't have enough gold!");
      }
    }
  });
};

let characterMenu = troopId => {
  //Show dashboard and hide the openSlideButton
  $(`.side-nav`).width("250px");
  $(`#openSlideButton`).hide();

  //Empty dashboar
  $("#selectedItemData").empty();

  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));

  //get current cell
  let currentCell = $(`[troopId = ${troopId}]`);
  let currentCellNumber = $(currentCell).attr("cellnumber");
  console.log(currentCellNumber);

  //Get character
  let playerTroops = player.troops;
  let character;
  for (const troop of playerTroops) {
    if (troop.id == troopId) {
      character = troop;
    }
  }

  if (character) {
    //Fill dashboar
    $("#selectedItemData").append(
      `<div id="itemAttributes" class="accordionMenu"></div>`
    );
    $("#selectedItemData").append(
      `<div id="itemMethods" class="accordionMenu"></div>`
    );
    $("#itemAttributes").append(`
          <li id=characterTitle> 
            ${character.sprite} ${character.type}
           </li>
          <br>
          <li>
            <i class="fas fa-heart"></i> HP: ${character.healthPoints}
          </li> 
          <li>
            Attack: ${character.attack}
          </li> 
          <li>
            Already attacked: ${character.attacked}
          </li> 
          <li>
          Defense: ${character.defense}
          </li> 
          <li>
            Movements: ${character.movesLeft}
          </li> 
          <li>
            Range: ${character.range}
          </li> 
          <li>
           Gems: ${character.gems}
          </li> 
    
    
          <br>
      `);
    //Movement
    $("#itemMethods").append(`
    <li class="item">
      <a href="#" id="movementButton" class="sidemenuButton">
        <i class="fas fa-expand-arrows-alt"></i> Move ${character.type}
      </a>
      <div class="subMenu" id="movementSubMenu">
        <a href="#movementSubMenu">
          <div>
            Moves ${character.movements}
          </div>
  
        </a>
      </div>
    </li>
  `);
    $("#movementButton, #movementSubMenu").click(function() {
      if (player.moves > 0 && character.movesLeft > 0) {
        //Highlight moves
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(character));
        //clean board
        removePossibleMoves();
        //highlight possible moves
        ////Define available moves
        let smallest = getSmallestNumber(player.moves, character.movesLeft);
        highlightPossibleMoves(currentCellNumber, smallest);
        //add event listener to possible moves
        moveTroop(currentCell);
        //re call menu
        characterMenu(character.id);
      } else {
        callAlert("warning", "Woops ", "You don't have any moves left!");
      }
    });
    //Attack
    $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="attackButton" class="sidemenuButton">
          <i class="fas fa-hand-rock"></i> Attack 
        </a>
        <div class="subMenu" id="attackSubMenu">
          <a href="#attackSubMenu">
            <div>
              Attack ${character.attack}
            </div>
            <div>
              Range ${character.range}
            </div>
    
          </a>
        </div>
      </li>
    `);
    $("#attackButton, #attackSubMenu").click(function() {
      //**** Attack ****/
      if (!character.attacked) {
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(character));

        //clean board
        removePossibleAttacks();

        //highlight possible attack
        highlightPossibleAttacks(currentCellNumber, character.range);

        attack(currentCellNumber, character);
      } else {
        callAlert("warning", "Woops ", "Character already attacked");
      }
    });

    //Use power up

    let powerUpTitle = "None";
    if (character.powerUp) {
      if (character.powerUp.includes("Attack")) {
        powerUpTitle = "Boost Attack";
      } else {
        powerUpTitle = "Boost Defense";
      }
    }
    $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="powerUpButton" class="sidemenuButton">
          <i class="fas fa-plus"></i> Power Up 
        </a>
        <div class="subMenu" id="powerUpSubMenu">
          <a href="#powerUpSubMenu">
            <div>
              Power-Up: ${powerUpTitle}
            </div>
          </a>
        </div>
      </li>
    `);
    $("#powerUpButton, #powerUpSubMenu").click(function() {
      if (character.powerUp) {
        //Set selected character to local storage
        localStorage.setItem("selectedCharacter", JSON.stringify(character));

        usePowerUp(character, player);
      }
    });

    //Refresh Board
    $("#itemMethods").append(`
      <li class="item">
        <a href="#" id="cleanGridButton" class="sidemenuButton">
          <i class="fas fa-th"></i> Clean grid 
        </a>
        <div class="subMenu" id="cleanGridSubMenu">
          <a href="#cleanGridSubMenu">
            <div>
              <i class="fas fa-sync-alt"></i>
              <i class="fas fa-th"></i>
            </div>
    
          </a>
        </div>
      </li>
    `);
    $("#cleanGridButton, #cleanGridSubMenu").click(function() {
      refreshBoard();
    });
  } //End if charadcter
};

/************************************************************
 * Start Game
 ***********************************************************/

//Hide start game button
$(`#startGameButton`).hide();
//Hide grid
$(`.grid-container`).hide();

//Setup hidden game form
let showGameSetupForm = () => {
  //Remove play game button
  $(`#playGameButton`).remove();

  $(`#gameSetupForm`).append(`
      <p>Choose amount of players:</p>
      <div id="playerAmountCheckBoxes">
        <div class="form-check">
          <input class="form-check-input playerAmountCheckBox" type="checkbox" value="2" id="palayerAmountCheck2">
          <label class="form-check-label" for="palayerAmountCheck2">
            2
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input playerAmountCheckBox" type="checkbox" value="3" id="palayerAmountCheck3">
          <label class="form-check-label" for="palayerAmountCheck3">
            3
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input playerAmountCheckBox" type="checkbox" value="4" id="palayerAmountCheck4">
          <label class="form-check-label" for="palayerAmountCheck4">
            4
          </label>
        </div>
      </div>
    </div>
      `);

  //Below: allows us to just have one check box checked at atime
  $(function() {
    $(".playerAmountCheckBox").click(function(e) {
      $(".playerAmountCheckBox")
        .not(this)
        .prop("checked", false);
    });
  });

  //Below: shows start game when check box is clicked
  $(function() {
    $(".playerAmountCheckBox").click(function() {
      $(`#startGameButton`).show();
    });
  });
};

//Show game form
$(`#playGameButton`).click(showGameSetupForm);

//Start game function
let startGame = () => {
  setInterval(function() {
    startTimer();
  }, 1000);

  $(`#startGameButton`).hide();
  //Get amount of palyers from form
  let playerAmount;
  $(`#playerAmountCheckBoxes input:checked`).each(function() {
    playerAmount = this.value;
  });

  //start game
  if (playerAmount) {
    //Hide initial game form
    $(`#gameSetupForm`).hide();
    $(`.grid-container`).show();
    addGemsToGrid();
    addPowerUpsToGrid();

    //save amount of players to local storage
    localStorage.setItem(`playerAmount`, playerAmount);

    //set players to local storage
    for (let i = 0; i < playerAmount; i++) {
      let playerData = {
        castle: undefined,
        troops: [],
        moves: 0
      };
      localStorage.setItem(`player${i + 1}`, JSON.stringify(playerData));
    }

    //Add castles to the board and to players' local storage
    addCastles(playerAmount);

    //set current turn
    localStorage.setItem("currentPlayer", "player1");
  }
};

//Setup player's construction and characters abilities
let playerItemSetup = () => {
  let currentPlayer = localStorage.getItem("currentPlayer");
  //Highlight playerts items

  let myItems = $(`[owner="${currentPlayer}"]`);
  let castles = $(`[itemType="${"castleItem"}"]`);

  //Go to respective menu if current player item is clicked
  for (const item of myItems) {
    item.classList.add("currentPlayerItem");
    let itemType = $(item).attr("itemType");
    let troopId = $(item).attr("troopId");

    switch (itemType) {
      case "castleItem":
        $(item).click(function() {
          castleMenu();
        });
        break;

      case "Archer":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      case "Assassin":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      case "Berseker":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      case "Horseman":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      case "Mage":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      case "Samurai":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      case "Spy":
        $(item).click(function() {
          characterMenu(troopId);
        });
        break;

      default:
        break;
    }
  }

  //Go to respective menu if enemy castle is clicked
  for (const item of castles) {
    let owner = $(item).attr("owner");

    if (owner != currentPlayer) {
      $(item).click(function() {
        enemyCastleMenu(owner, item);
      });
    }
  }
};

let updateMovesLeft = moves => {
  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));

  player.moves -= moves;

  localStorage.setItem(currentPlayer, JSON.stringify(player));
};

let updateGoldLeft = goldSpent => {
  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));

  player.castle.gold -= goldSpent;

  localStorage.setItem(currentPlayer, JSON.stringify(player));
};

////setup turns
let playTurn = () => {
  rollDice();
  showPlayerData();
  playerItemSetup();
  restoreCharacterStats();
  checkSpies();
  addToolTip();
  castleMenu();
};

//Call Start Game
$(`#startGameButton`).click(function() {
  startGame();
  playTurn();
});

//restore character's attack and defense with mementos
let restoreCharacterStats = () => {
  let currentPlayer = localStorage.getItem(`currentPlayer`);
  let player = JSON.parse(localStorage.getItem(`${currentPlayer}`));
  let currentPlayerItems = $(".currentPlayerItem");
  for (const item of currentPlayerItems) {
    if (!$(item).hasClass("castleItem")) {
      for (const memento of careTaker.list) {
        if ($(item).attr("troopId") == memento.id) {
          for (const troop of player.troops) {
            if (troop.id == memento.id) {
              troop.attack = memento.attack;
              troop.defense = memento.defense;
              troop.movesLeft = memento.movements;
              troop.attacked = memento.attacked;
            }
          }
        }
      }
    } else {
      //item is castle
      //check castle constructions
      for (const memento of careTaker.list) {
        for (const construction of player.castle.catapults) {
          if (construction.id == memento.id) {
            construction.attacked = memento.attacked;
          }
        }
        for (const construction of player.castle.crossbows) {
          if (construction.id == memento.id) {
            construction.attacked = memento.attacked;
          }
        }
      }
    }
  }
  localStorage.setItem(currentPlayer, JSON.stringify(player));
};

//change turns
let changeTurn = () => {
  minutes = 1;
  seconds = 00;
  refreshBoard();

  //   remove current player items
  let currentPlayerItems = $(".currentPlayerItem");
  console.log(currentPlayerItems);
  for (const item of currentPlayerItems) {
    $(item).removeClass("currentPlayerItem");
  }

  //get current player
  let currentPlayer = localStorage.getItem("currentPlayer");
  let currentPlayerNumber = parseInt(currentPlayer[currentPlayer.length - 1]);

  //get amount of players
  let playerAmount = localStorage.getItem("playerAmount");

  //change current player
  if (currentPlayerNumber == playerAmount) {
    currentPlayer = "player1";
  } else {
    currentPlayer = "player" + (currentPlayerNumber + 1);
  }

  localStorage.setItem("currentPlayer", currentPlayer);
  playTurn();
};

/************************************************************
 * Timer
 ***********************************************************/
// setInterval(function() {
//   startTimer();
// }, 1000);

let startTimer = () => {
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes <= 0 && seconds <= 0) {
    $(".timer").html("Time out!");
    changeTurn();
  } else {
    if (minutes < 10 && seconds < 10) {
      $(".timer").addClass("timerEnding");
      $(".timer").html(
        `<i class="fas fa-hourglass-half"></i> 0${minutes}:0${seconds}`
      );
    } else if (minutes < 10) {
      $(".timer").html(
        `<i class="fas fa-hourglass-half"></i> 0${minutes}:${seconds}`
      );
    } else if (seconds < 10) {
      $(".timer").html(
        `<i class="fas fa-hourglass-half"></i> ${minutes}:0${seconds}`
      );
    }
  }
};

/************************************************************
 * Global variables
 ***********************************************************/

const careTaker = new CareTaker();

let minutes = 1;
let seconds = 0;

let swapStyleSheet = sheet => {
  $("#pageStyle").attr("href", sheet);
};

$(`#docButton`).click(function() {
  swapStyleSheet("css/style2.css");
  // changeTurn();
  //console.log(getCurrentRow(21));
});

$(`#manualButton`).click(function() {
  swapStyleSheet("css/style.css");
  // changeTurn();
  //console.log(getCurrentRow(21));
});
