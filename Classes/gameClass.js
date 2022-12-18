class GameCharacter{
    constructor(name, health, maxHealth, attackPower, defense){
      this.name = name
      this.health  = health 
      this.maxHealth  = maxHealth 
      this.attackPower  = attackPower 
      this.defense  = defense 
    }
      attack = (targetCharachter) => {
        if (targetCharachter.defense < this.attackPower){
          targetCharachter.health -= (this.attackPower - targetCharachter.defense)
        } 
      }
      heal = (amount) => {
        if (this.health + amount > this.maxHealth){
          this.health = this.maxHealth
        } else{
          this.health += amount
        }
      }
      isDead = () =>{
        return this.health <= 0 // Comparaison operator returns a boolean by default
      } 
    }
  const player = new GameCharacter('Player', 100, 100, 10, 5);
  const enemy = new GameCharacter('Enemy', 50, 50, 15, 3);
  
  player.attack(enemy);
  console.log(enemy.health); 
  
  enemy.attack(player);
  console.log(player.health); 
  
  player.heal(20);
  console.log(player.health); 
  
  console.log(player.isDead()); 
  console.log(enemy.isDead()); 
  
  enemy.attack(player);
  enemy.attack(player);
  console.log(player.isDead()); 