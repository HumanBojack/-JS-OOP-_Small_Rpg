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
			this.turn = new Turn(10 - this.turnLeft);
			this.turn.startTurn();
			this.turn.order(Character.all.filter(character => character.status == "playing"));
		} else {
			console.log("Game has ended")
		}
		return this;
	}
}