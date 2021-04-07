import Game from './game.js';
import Turn from './turn.js';
import Character from './character.js';
import Fighter from './fighter.js';
import Paladin from './paladin.js';
import Monk from './monk.js';
import Berzerker from './berzerker.js';
import Assassin from './assassin.js';

window.Game = Game;
window.Turn = Turn;
window.Character = Character;

const Grace = new Fighter("Grace");
window.Grace = Grace;
const Ulder = new Paladin("Ulder");
window.Ulder = Ulder;
const Moana = new Monk("Moana");
window.Moana = Moana;
const Draven = new Berzerker("Draven");
window.Draven = Draven;
const Carl = new Assassin("Carl");
window.Carl = Carl;


