class Word {

  constructor(words){
    this.word = this.pickWord(words);
    //on décompose le mot en tableau de lettres
    this.wordMapping = this.getWordMapping();

  }
  

  // méthode qui récupère un élément aléatoire dans le tableau de mots
  pickWord(words){
    const randomIndex = Math.floor(Math.random()*words.length);

    return words[randomIndex];
  };


  // méthode qui décompose un mot en tableau de lettres
  getWordMapping() {
    return this.word.split('').map(letter => ({letter, isVisible: false}));
  
}

  // Fonction de vérification de la lettre choisie
  checkLetter(letter){
    let isLetterInWord = false;

    // Vérifie si la lettre est dans le mot à deviner
    this.wordMapping.forEach((letterMapping) => {
      if (letterMapping.letter === letter) {
        letterMapping.isVisible = true;
        isLetterInWord = true;
      }
    });
    return isLetterInWord;

  }

  //méthode qui vérifi se toute les lettres ont été trouvée
  isAllLeterFound(){
    return this.wordMapping.every(letterMapping => letterMapping.isVisible = true);
  }

  //méthode qui révèle toute les lettres en cas de défaite
  revealWord(){
    this.wordMapping.forEach(letterMapping => letterMapping.isVisible = false);
  }

  //méthode pour le rendu du mot à trouver
  getWordHtml(){
    return this.wordMapping.map(letterMapping => 
      letterMapping.isVisible ? `<li>${letterMapping.letter}</li>` : `<li>_</li>`).join('');
    }
  }
  


export default Word;