import Turn from "./turn.js";
import Character from './character.js';
export default class Game {
	constructor(){
		this.turnLeft = 10;
		Game.current = this;
		this.newTurn();
	}

	newTurn(){
		let playersLeft = Character.all.filter(character => character.status == "playing")
		if (this.turnLeft >= 1 && playersLeft.length >= 2){
			this.turnLeft -= 1;
			this.turn = new Turn(10 - this.turnLeft, this);
			this.turn.startTurn();
			this.turn.order(Character.all);
		} else if (playersLeft.length > 1){
			playersLeft = playersLeft.map(player => `${player.name} (${player.hp}hp)`).join();
			statsHTML.textContent = `Not turn left, players still alive are: ${playersLeft}`;
		} else if (playersLeft.length = 1){
			statsHTML.textContent = `${playersLeft[0].name} won !`;
		} else {
			statsHTML.textContent = "Somehow, everyone seems to be dead";
		}
		return this;
	}

	static watchStats() {
		let players = Character.all.filter(character => character.status == "playing");

		let hps = players.map(player => player.hp);
		let maxHp = players.find(player => player.hp == Math.max(...hps));
		let lowestHp = players.find(player => player.hp == Math.min(...hps))
		let dmg = players.map(player => player.dmg);
		let maxDmg = players.find(player => player.dmg == Math.max(...dmg));

		aliveHTML.textContent = `Players left: ${players.map(player => player.name).join(", ")}`;

		statsHTML.children["max_hp"].textContent = `-the highest health points is ${maxHp.name}(${maxHp.hp}hp)`;
		statsHTML.children["lowest_hp"].textContent = `-the lowest health points is ${lowestHp.name}(${lowestHp.hp}hp)`;
		statsHTML.children["max_dmg"].textContent = `-the highest damage is ${maxDmg.name}(${maxDmg.dmg}dmg)`;
		
	}

}