import Game from "./game.js";
import Turn from "./turn.js";
import Character from "./character.js";
import Paladin from "./paladin.js";
import Monk from "./monk.js";
import Berzerker from "./berzerker.js";
import Assassin from "./assassin.js";
export default class Fighter extends Character {
	constructor(name, hp = 12, dmg = 4, mana = 40) {
		super(name, hp, dmg, mana);
	}

	darkVision(victim) {
		if (victim.status == "playing" && this.mana >= 20) {
			this.mana -= 20;
			this.cooldown = 2;
			victim.takeDamage(5);
			if (victim.status == "loser") {
				this.mana += 20;
			}
			this.turn.endPlayerTurn(this);
		} else {
			console.log("You can't do that");
		}
		return this;
	}

	takeDamage(damage) {
		this.cooldown > 0
			? (this.hp -= Math.max(damage - 2, 0))
			: (this.hp -= damage);
		if (this.hp <= 0) {
			this.status = "loser";
			this.hp = 0;
			console.log("Ennemy down");
		}
		return this;
	}
}
