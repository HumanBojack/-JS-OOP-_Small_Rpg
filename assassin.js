import Character from './character.js'
export default class Assassin extends Character {
	constructor(name, hp = 6, dmg = 6, mana = 20) {
		super(name, hp, dmg, mana);
	}

	shadowHit(victim) {
		if (this.mana >= 20) {
			this.mana -= 20;
			this.cooldown = 2;
			victim.takeDamage(7);
			this.turn.endPlayerTurn(this);
		} else {
			console.log("You don't have enough mana to do that.");
		}
		return this;
	}

	takeDamage(damage) {
		if (this.cooldown != 1){
			this.hp -= damage
		}
		if (this.hp <= 0) {
			this.status = "loser";
			this.hp = 0;
			console.log("Ennemy down");
		}
		return this;
	}
}