var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }, // comma
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

var fight = function(enemy) {
  while(playerInfo.health > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    if (promptFight === "fight" || promptFight === "FIGHT") {
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.Attack);
      
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + ". "
      );
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + ". "
      );

      if (enemy.health <= 0) {
        window.alert(enemyNames + " has died!");
        break;
      }

      if (playerHealth <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }if (promptFight === "skip" || promptFight === "SKIP"){
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log ("playerMoney", playerInfo.money);
        break;
    }
    else {
        fight();
    }
    }
  }
;
  }

var startGame = function() {
  // reset player stats
  playerInfo.reset();
  for (var i= 0; i < enemyInfo.length; i++) {
    if (playerInfo.health < 0){
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    debugger;
    fight(pickedEnemyObj);
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round!");

      if (storeConfirm) {
        shop();
      }
    }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  
  endGame();
};

var endGame = function() {
  if (playerInfo.health > 0) {
    window.alert("The game has now ended. Let's see how you did!");
  }
  else {
    window.alert("You;ve lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  var shop = function() {
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?"
    );
    switch (shopOptionPrompt) {
      case "REFILL": // new case
      case "refill":
        playerInfo.refillHealth();
        break;
      
        case "UPGRADE": // new case
        case "upgrade":
        playerInfo.upgradeAttack();
        break;

        case "LEAVE": // new case
        case "leave":
           window.alert("Leaving the store.");
           break;
      default:
        window.alert("You did not pick a valid option. Try again.");
        shop;
        break;
    }
  };
  if (playAgainConfirm) {
    startGame;
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }


}

var randomNumber = function() {
  var value = Math.floor(Math.random() * (21)) + 40;
  
  return value;
};

fight();