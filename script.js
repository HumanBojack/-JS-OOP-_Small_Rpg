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
}

class Pladin extends Character {
	constructor(hp = 16, dmg = 3, mana = 160) {
		super(hp, dmg, mana);
	}
}

class Monk extends Character {
	constructor(hp = 8, dmg = 2, mana = 200) {
		super(hp, dmg, mana);
	}
}

class Berzerker extends Character {
	constructor(hp = 8, dmg = 4, mana = 0) {
		super(hp, dmg, mana);
	}
}

class Assassin extends Character {
	constructor(hp = 6, dmg = 6, mana = 20) {
		super(hp, dmg, mana);
	}
}
