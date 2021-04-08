import Character from './character.js'
export default class Berzerker extends Character {
	constructor(name, hp = 8, dmg = 4, mana = 0) {
		super(name, hp, dmg, mana);
	}

	rage() {
		if (this.hp >= 2) {
			this.dmg += 1;
			this.hp -= 1;
			this.turn.endPlayerTurn(this);
		} else {
			alertHTML.textContent = `Your life is too low (${this.hp})`;
		}
		return this;
	}

	special(victim){
		this.rage();
	}
}