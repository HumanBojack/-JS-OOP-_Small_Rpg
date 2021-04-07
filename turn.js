export default class Turn {
	constructor(number){
		this.number = number;
	}

	startTurn(){
		console.log(`Starting turn ${this.number} !`);
		return this;
	}

	order(characters){
		console.log(characters);
		characters.every(character => {
			console.log(character.name);
			return true;
		})
	}


}