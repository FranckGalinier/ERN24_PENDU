class Choice {

  constructor(){
  //TODO: liste des lettres de l'alphabet
  this.choices = this.generateChoices();
  this.choicesMapping = this.getChoicesMapping();
   
  }

  //méthode qui génére une liste des lettres de l'alphabet (A-Z)
  generateChoices(){
    const choices = [];
    for(let index = 65; index <= 90; index++) {
        choices.push(String.fromCharCode(index));
    }
    return choices;
  };

  //on fait un tableau de lettre avec avec un état indiquant si elle a était choisie
  getChoicesMapping(){

    return this.choices.map(letter => ({letter, isChosen: false}));
  }

  //méthode pour marquer une lettre comme choisie
  markChosen(letter){
    this.choicesMapping.forEach(letterMapping => {
      if(letterMapping.letter === letter){
        letterMapping.isChosen = true;
      }
    })
  }

  //méthode pour obtenir le rendu des lettres
  getChoicesHtml(){
    return this.choicesMapping.map(letterMapping => 
      !letterMapping.isChosen ? `<li class="scrabble-letter">${letterMapping.letter}</li>` : `<p class="scrabble-letter disabled">${letterMapping.letter}</p>`
    ).join('');
  }

}


export default Choice;