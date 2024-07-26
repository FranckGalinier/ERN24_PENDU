import Choice from "./Classes/Choice";
import Game from "./Classes/Game";
import {WORDS} from "./Tools/words";
class App{



  start(){

    console.log('App started')
    //récupération des éléments du DOM
    const game = new Game(WORDS);
    game.init();

   
  };
}

const app = new App();
export default app;