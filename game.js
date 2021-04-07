import Turn from "./turn.js";
import Character from './character.js';
export default class Game {
	constructor(){
		this.turnLeft = 10;
		this.newTurn();
	}

	newTurn(){
		if (this.turnLeft >= 1){
			this.turnLeft -= 1;
			this.turn = new Turn(10 - this.turnLeft, this);
			this.turn.startTurn();
			this.turn.order(Character.all);
		} else {
			console.log("Game has ended")
		}
		return this;
	}

	static watchStats() {
		let players = Character.all.filter(character => character.status == "playing");

		let hps = players.map(player => player.hp);
		let maxHp = players.find(player => player.hp == Math.max(...hps));
		let lowestHp = players.find(player => player.hp == Math.min(...hps))
		let dmg = players.map(player => player.dmg);
		let highDmg = players.find(player => player.dmg == Math.max(...dmg));
		console.log(`The player with: 
		-the highest health points is ${maxHp.name}(${maxHp.hp}hp),
		-the lowest health points is ${lowestHp.name}(${lowestHp.hp}hp), 
		-the highest damage is ${highDmg.name}(${highDmg.dmg}dmg)`);
		console.log(players);
	}
}