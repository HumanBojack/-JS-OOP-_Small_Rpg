export default class Character {
	constructor(name, hp, dmg, mana) {
		this.name = name;
		this.status = "playing";
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
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
		} else {
			console.log("You can't attack this player");
		}
		return this;
	}
}
Character.all = [];