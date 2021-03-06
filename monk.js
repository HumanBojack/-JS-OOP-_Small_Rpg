import Character from './character.js'
export default class Monk extends Character {
	constructor(name, hp = 8, dmg = 2, mana = 200) {
		super(name, hp, dmg, mana);
	}

	heal() {
		if (this.mana >= 25) {
			this.mana -= 25;
			this.hp += 8;
			this.turn.endPlayerTurn(this);
		} else {
			alertHTML.textContent = `You probably don't have enought mana (${this.mana})`;
		}
		return this;
	}

	special(victim){
		this.heal();
	}
}