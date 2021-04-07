import Game from './game.js';
import Turn from './turn.js';
import Character from './character.js';
import Paladin from './paladin.js';
import Monk from './monk.js';
import Berzerker from './berzerker.js';
import Assassin from './assassin.js';
export default class Fighter extends Character {
	constructor(name, hp = 12, dmg = 4, mana = 40) {
		super(name, hp, dmg, mana);
	}

	darkVision(victim) {
		// TODO: Ajouter le système pour recevoir moins de dégâts au prochain tour
		if (victim.status == "playing" && this.mana >= 20) {
			this.mana -= 20;
			victim.takeDamage(5);
			if (victim.status == "loser") {
				this.mana += 20;
			}
		} else {
			console.log("You can't do that");
		}
		return this;
	}
}