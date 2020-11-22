var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
      } 
      else {
        window.alert("You don't have enough money!");
      }
    },
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
};

//Switch statement for refillhealth and upgradeattack 
//case "REFILL":
//case "refill":
  //playerInfo.refillHealth();
  //break;
//case "UPGRADE":
//case "upgrade":
  //playerInfo.upgradeAttack();
  //break;

var enemyInfo = [
  {
    name: "Roborto",
    attack: 12
  },
  {
    name: "Amy Android",
    attack: 13
  },
  {
    name: "Robo Trumble",
    attack: 14
  }
];

var fight = function(enemyName) { 
  //console.log(enemyNames.length, i++) 
    while (playerInfo.health > 0 && enemyHealth > 0) {
      //Alert players that they are starting a round 
     // window.alert("Welcome to Robot Gladiators!")
      
      // ask player if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          //break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
          playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        //break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert("You have lost your robot in battle! Game Over!");
        //break
      }
    }
  };
 fight();

 
  // function to start a new game
//var startGame = function() {
  // reset player stats
  //playerInfo.reset();
  
  //for (var i = 0; i < enemyNames.length; i++) {
    //if (playerInfo.health > 0) {
      //window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      //var pickedEnemyName = enemyNames[i];

      //enemyHealth = randomNumber(40, 60);

      //fight(pickedEnemyName);
    //}
    // if player is still alive and we're not at the last enemy in the array
    //if (playerInfo.health > 0 && i < enemyNames.length - 1) {
      //shop();
      //}
    //else {
      //window.alert("You have lost your robot in battle! Game Over!");
      //break;
    //}
  //};
    // play again
    //startGame();
    // start the game when the page loads
    //startGame();



// function to end the entire game
//var endGame = function() {
   // if player is still alive, player wins!
   //if (playerInfo.health > 0) {
    //window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  //} 
  //else {
    //window.alert("You've lost your robot in battle.");
  //}
//} 
  // ask player if they'd like to play again
  //var playAgainConfirm = window.confirm("Would you like to play again?");

  //if (playAgainConfirm) {
  // restart the game
  //startGame();
//} 
  //else {
  //window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  //}
//};
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
//endGame();


//Put it after the endGame() function definition and before the startGame() function call at the end.
//var shop = function() {
  //console.log("entered the shop");
//};

// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;

  return value;
};