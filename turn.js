import Character from './character.js';
export default class Turn {
	constructor(number, game){
		this.number = number;
		this.game = game;
	}

	startTurn(){
		console.log(`Starting turn ${this.number} !`);
		Character.all.map(character => character.hasPlayed = false)
		console.log(Character.all)
		return this;
	}

	order = (characters, game) => {
		characters = characters.filter(character => character.hasPlayed == false && character.status == "playing")
		if (characters.length > 0){
			let player = Character.randomPlayer(characters);
			player.turn = this;
			console.log(player.name);
			player.timeoutId = setTimeout(this.endPlayerTurn, 30000, player);
		} else {
			this.game.newTurn();
		} 
	}

	endPlayerTurn = (player) => {
		player.hasPlayed = true;
		clearTimeout(player.timeoutId);
		this.order(Character.all);
	}
}