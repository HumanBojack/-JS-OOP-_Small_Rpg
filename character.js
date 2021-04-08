export default class Character {
	constructor(name, hp, dmg, mana) {
		this.name = name;
		this.status = "playing";
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
		this.timeoutId = 0;
		this.hasPlayed = false;
		this.cooldown = 0;
		Character.all.push(this);
	}

	takeDamage(damage) {
		this.hp -= damage;
		if (this.hp <= 0) {
			this.status = "loser";
			this.hp = 0;
			console.log("Ennemy down");
		}
		return this;
	}

	dealDamage(victim) {
		if (victim.status == "playing") {
			victim.takeDamage(this.dmg);
			if (victim.status == "loser") {
				this.mana += 20;
			}
			this.turn.endPlayerTurn(this);
		} else {
			alertHTML.textContent = "You can't attack this player";
		}
		return this
	}

	static randomPlayer(players){
		return players[Math.floor(Math.random() * players.length)];
	}
}
Character.all = [];