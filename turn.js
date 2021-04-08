import Character from './character.js';
export default class Turn {
	constructor(number, game){
		this.number = number;
		this.game = game;
	}

	startTurn(){
		turnHTML.textContent = `Turn ${this.number}`;
		Character.all.map(character => character.hasPlayed = false);
		Character.all.map(character => character.cooldown = Math.max(character.cooldown - 1, 0));
		return this;
	}

	order = (characters) => {
		Game.watchStats()
		characters = characters.filter(character => character.hasPlayed == false && character.status == "playing");
		if (characters.length > 0){
			let player = Character.randomPlayer(characters);
			player.turn = this;
			this.game.currentPlayer = player;
			playingHTML.textContent = `It's ${player.name}'s turn.`
			player.timeoutId = setTimeout(this.endPlayerTurn, 30000, player);
			victimHTML.innerHTML = Character.all.filter(character => character.status == "playing").map(character => `<option>${character.name}</option>`);
		} else {
			this.game.newTurn();
		} 
	}

	endPlayerTurn = (player) => {
		player.hasPlayed = true;
		clearTimeout(player.timeoutId);
		alertHTML.textContent = "";
		this.order(Character.all);
	}
}