var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

var fight = function(enemyNames) {
  while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
    if (promptFight === "fight" || promptFight === "FIGHT") {
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + ". "
      );
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + ". "
      );

      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        break;
      }

      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }if (promptFight === "skip" || promptFight === "SKIP"){
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 10;
        console.log ("playerMoney", playerMoney);
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
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i= 0; i < enemyNames.length; i++) {
    if (playerHealth < 0){
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    debugger;
    fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  
  endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert("The game has now ended. Let's see how you did!");
  }
  else {
    window.alert("You;ve lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame;
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

fight();