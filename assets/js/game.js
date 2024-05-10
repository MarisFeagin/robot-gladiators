// set name
var getPlayerName = function() {
  var name = "";
while (name === "" || name === null) {
  name = prompt("What is your robot's name?");
}
console.log("Your robot's name is " + name);
return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
  }, // comma
  refillHealth: function () {
      if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
      } else {
          window.alert("You don't have enough money!");
      }
  }, // comma
  upgradeAttack: function () {
      if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
      } else {
          window.alert("You don't have enough money!");
      }
  }
}

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (21)) + 40;

  return value;
};

var enemyInfo = [
  {
      name: "Roborto",
      attack: randomNumber(10, 14)
  },
  {
      name: "Amy Android",
      attack: randomNumber(10, 14)
  },
  {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
  }
];

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    // conditional recursive here
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    // if player picks "skip" confirm and stop loop
    if (prompt === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
          // take money from playerMoney for skipping 
          playerInfo.money = playerInfo.money - 10;
          return true;
        }
        else {
            return false;
        }
    }
}

var fight = function (enemy) {
    // keep track of who goes first 
    var isPlayerTurn = true;
    //randomly change turn order
    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }
  //ask the player if they would like to fight or skip before starting the fight, if they choose to fight, then fight until someone dies
      //see here, you are fighting enemy not enemyInfo (which could also be called enemies - plural, that way you know the difference at a glance between the two)
      while (playerInfo.health > 0 && enemy.health > 0) {
          if (isPlayerTurn) {
            // ask player if they want to fight or skip using the fightOrSkip function
            if (fightOrSkip()) {
                // if true, leave fight by breaking loop
                break;
            }
          }
          //damage delt by player
          var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

          enemy.health = Math.max(0, enemy.health - damage);
          console.log(
              playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + ". "
          );
          //damage delt by enemy
          var damage = randomNumber(enemy.attack - 3, enemy.attack);

          playerInfo.health = Math.max(0, playerInfo.health - damage);
          console.log(
              enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + ". "
          );

          if (enemy.health <= 0) {
              window.alert(enemy.name + " has died!");
              break;
          }

          if (playerInfo.health <= 0) {
              window.alert(playerInfo.name + " has died!");
              break;
          } else {
              window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
          }
      }
        // switch turn order for next round
  isPlayerTurn = !isPlayerTurn;
  }

  //if (promptFight === "skip" || promptFight === "SKIP") {
   //   var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //  if (confirmSkip) {
    //      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
    //      playerInfo.money = Math.max(0, playerInfo.money - 10);
    //      console.log("playerMoney", playerInfo.money);
    //      return;
    //  }else{
          //If you do not skip start this function from the begining
    //      fight(enemy);
    //  }


 // }
// }

var startGame = function () {
  // reset player stats
  playerInfo.reset();
  for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
          window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
          var pickedEnemyObj = enemyInfo[i];
          pickedEnemyObj.health = randomNumber(40, 60);
          fight(pickedEnemyObj);
          if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
              window.confirm("The store is current under construction, come back soon!")
              //TODO
              // var storeConfirm = window.confirm("The fight is over, visit the store before the next round!");
              // if (storeConfirm) {
              //     shop();
              // }
          }
      } else {
          window.alert("You have lost your robot in battle! Game Over!");
          break;
      }
  }

  endGame();
};

var endGame = function () {
  if (playerInfo.health > 0) {
      window.alert("The game has now ended. Let's see how you did!");
  } else {
      window.alert("You've lost your robot in battle.");
  }
  // check local storage for high score, if it's not there use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  // if player has more money than the high score, player has new high score
  if (playerInfo.money > highScore) {
    localStorage.setItem("highscore", playerInfo.money);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has a highscore of " + playerInfo.money + ".")
  }
  else {
    alert(playerInfo.name + " did not beat the highscore of " + highScore + ".")
  }

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
      startGame();
  } else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (21)) + 40;

  return value;
};

startGame()