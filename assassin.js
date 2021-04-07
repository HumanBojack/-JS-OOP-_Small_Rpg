import Character from './character.js'
export default class Assassin extends Character {
	constructor(name, hp = 6, dmg = 6, mana = 20) {
		super(name, hp, dmg, mana);
	}

	shadowHit(victim) {
		//TODO: Ajouter les caractèristiques supplémentaires
		if (this.mana >= 20) {
			this.mana -= 20;
			victim.takeDamage(7);
			this.turn.endPlayerTurn(this);
		} else {
			console.log("You don't have enough mana to do that.");
		}
		return this;
	}
}