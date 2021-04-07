console.log("Hello world");
class Character {
	constructor(hp, dmg, mana) {
		this.status = "playing";
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
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
		} else {
			console.log("You can't attack this player");
		}
		return this;
	}
}

class Fighter extends Character {
	constructor(hp = 12, dmg = 4, mana = 40) {
		super(hp, dmg, mana);
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

class Paladin extends Character {
	constructor(hp = 16, dmg = 3, mana = 160) {
		super(hp, dmg, mana);
	}

	healingLighting(victim) {
		if (victim.status == "playing" && this.mana >= 40) {
			this.mana -= 40;
			this.hp += 5;
			victim.takeDamage(4);
			if (victim.status == "loser") {
				this.mana += 20;
			}
		} else {
			console.log("You can't do that");
		}
		return this;
	}
}

class Monk extends Character {
	constructor(hp = 8, dmg = 2, mana = 200) {
		super(hp, dmg, mana);
	}

	heal() {
		if (this.mana >= 25) {
			this.mana -= 25;
			this.hp += 8;
		} else {
			console.log("Not enough mana");
		}
		return this;
	}
}

class Berzerker extends Character {
	constructor(hp = 8, dmg = 4, mana = 0) {
		super(hp, dmg, mana);
	}

	rage() {
		if (this.hp >= 2) {
			this.dmg += 1;
			this.hp -= 1;
		} else {
			console.log("Your life is too low for that");
		}
		return this;
	}
}

class Assassin extends Character {
	constructor(hp = 6, dmg = 6, mana = 20) {
		super(hp, dmg, mana);
	}

	shadowHit(victim) {
		//TODO: Ajouter les caractèristiques supplémentaires
		if (this.mana >= 20) {
			this.mana -= 20;
			victim.takeDamage(7);
		} else {
			console.log("You don't have enough mana to do that.");
		}
		return this;
	}
}

const Grace = new Fighter();
const Ulder = new Paladin();
const Moana = new Monk();
const Draven = new Berzerker();
const Carl = new Assassin();
