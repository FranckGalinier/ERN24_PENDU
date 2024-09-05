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
  this.maxScore = 8;//nombre detnetative incorrecte avant la fin de la partie
  this.isGameOver = false;//etat de la partie
}

  init(){
    console.log("Game started")
    //todo: générer un mot aléatoire
    //Créer une instance de word en lui donnant le tableau de mots
    this.word = new Word(this.words);

    //on crée une instance de Choise
    this.choices = new Choice();

    //affichage du mot à trouver
    this.displayWord(this.word);

    //on afficher les lettres à choisir
    this.displayChoices();
    //ajout des écouteurs
    this.addEventListeners();
    
  }

  //méthode pou ajouter les evements sur les lettes
  addEventListeners(){
    this.els.choices.addEventListener('click', ({target})=>{

      //onvérifie si l'élément cliqué est une lettre et que le jeu n'est pas terminé
      if(target.matches('li') && !this.isGameOver){
        this.checkLetter(target.innerHTML);
      }
    })

    //écouteur d'évènement pour les frappes du clavier
    document.addEventListener('keydown', ({key})=>{
      const letter = String.fromCharCode(key); //on récupère la lettre frappée
      if(key >= 65 && key <= 90 && !this.isGameOver){
      this.checkLetter(letter); //on vérifie la lettre
      }
    } )
  }

  

  //méthode qui vérifie si la lettre est dans le mot
  checkLetter(letter){
    const isLetterInWord = this.word.checkLetter(letter);
    this.choices.markChosen(letter); //maqrqie la lettre comme choisir
    this.displayChoices(); //affiche les lettres à choisir

    if(isLetterInWord){
      this.displayWord(); //affiche le mot à trouver
    }else{
      this.scoreCount++; //incrémente le score
      this.displayScore(); //affiche le pendu
    }

    //gestion de la fin de partie
    if(this.scoreCount == this.maxScore){
      this.endGame();
    }else if(this.word.isAllLeterFound()){
      this.winGame();
    }
  }
a
  //méthode qui affiche le mot à trouver
  displayWord(){
    this.els.answer.innerHTML = this.word.getWordHtml();
  }

  //méthode qui affiche les lettres à choisir
  displayChoices(){
    this.els.choices.innerHTML = this.choices.getChoicesHtml();
  }

  //méthode pour afficher le pense
  displayScore(){
    this.els.score.innerHTML = `
       <img src="/src/assets/images/s${this.scoreCount}.png" alt="image du pendu">
    `;
  }

  //méthode  pour la finde partie en cas de défaite
  endGame(){
    this.isGameOver = true; //on met fin ) la partie
    this.word.revealWord(); //on l'afficher le mot
    this.displayWord(); //on affiche le mot
    this.els.choices.innerHTML =`
    <div class="box">
      <h1 class="loose">Game Over</h1>
      <button class="button" onclick="window.location.reload()">Recommencer</button>
    </div>
    `;
  }

  //métode pour la fin de jeu en cas de victoire
  winGame(){
    this.isGameOver = false; //on met fin à la partie
    this.els.choices.innerHTML =`
    <div class="box">
      <h1 class="win">Bravo !</h1>
      <button class="button" onclick="window.location.reload()">Recommencer</button>
    </div>`;
  }
}

export default Game;