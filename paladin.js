import Game from './game.js';
import Turn from './turn.js';
import Character from './character.js';
import Fighter from './fighter.js';
import Monk from './monk.js';
import Berzerker from './berzerker.js';
import Assassin from './assassin.js';
export default class Paladin extends Character {
	constructor(name, hp = 16, dmg = 3, mana = 160) {
		super(name, hp, dmg, mana);
	}

	healingLighting(victim) {
		if (victim.status == "playing" && this.mana >= 40) {
			this.mana -= 40;
			this.hp += 5;
			victim.takeDamage(4);
			if (victim.status == "loser") {
				this.mana += 20;
			}
			this.turn.endPlayerTurn(this);
		} else {
			console.log("You can't do that");
		}
		return this;
	}
}