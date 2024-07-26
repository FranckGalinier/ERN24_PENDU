import Word from "./Word";
import Choice from "./Choice";

class Game{

constructor(words){
  this.els = {
    score: document.getElementById('score'),
    answer: document.getElementById('answer'),
    choices: document.getElementById('choices')
  };
  this.words = words; //liste des mots possibles
  this.word = null; //mot à trouver
  this.choices = null; //liste des choix (lettres) possibles
  this.scoreCount = 0; //Compteru pour le score
  this.maxScore = 10;//nombre detnetative incorrecte avant la fin de la partie
  this.isGameOver = false;//etat de la partie
}

  init(){
    console.log("Game started")
    //todo: générer un mot aléatoire
    //Créer une instance de word en lui donnant le tableau de mots
    this.word = new Word(this.words);

     //affichage du mot à trouver
    this.displayWord(this.word);
    //on crée une instance de Choise
    this.choices = new Choice();
    //on afficher les lettres à choisir
    this.displayChoices();
    
  }

  //méthode qui affiche le mot à trouver
  displayWord(){
    this.els.answer.innerHTML = this.word.getWordHtml();
  }

  //méthode qui affiche les lettres à choisir
  displayChoices(){
    this.els.choices.innerHTML = this.choices.getChoicesHtml();
  }

}

export default Game;