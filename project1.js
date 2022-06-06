const readline = require('readline');
  const read = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
  prompt: 'To make a sentence, type the letters in the box below. '
  });
  read.on('line', (line) => {
    checkword(line);
  }).on('close', () => {
    process.exit(0);
  });
let fullwords = []; 
let selectwords = "";
let lif =0;
  let word = {
     animals: ['cat','dog','monkey','donkey'],
     colore: ['red','blue','green','yello'],
     names : ['omar','ali','ahmad','sttam']
    }
    const hangman = [
        `___________ you  ___________`,`________on _________`,`_______ the___________`,`________ verge_________`,`___________of___________`,`__________losing___________`,`_______your life -_-`
         ];
  function play(){
    console.log("\n=============================================")
    console.log('welcome to hangman!!!!!!!!')
    console.log("=============================================")
    let catagories =["names","animals","colore"];
    let selectoption = catagories[getRandomword(2)];
     selectwords = word[selectoption][getRandomword(getRandomword(word[selectoption].length))];
     fullwords = Array(selectwords.length);
    let lif = 0;
    console.log('The word is a  ' + selectoption + '\n' + fullwords.join('----')  );
    read.prompt();
  }
  function checkword(letter) {
    let tick;
    for (let i = 0; i < selectwords.length; i++) {
      if (selectwords[i].toLowerCase() === letter) {
        fullwords[i] = selectwords[i];
        tick = true;
      } else if (fullwords[i] === undefined) {
        fullwords[i] = '_';
      }
    }
    tick ? tick = false : lif++;
    
    if (lif === 6) {
      console.log(hangman[lif]);
      console.log('Game over, you are los');
      console.log('Word is ', selectwords);
      play();
      return;
    } else {
      console.log(hangman[lif]);
    }
    fullwords.includes('_') ? read.prompt() : console.log('You have won');
    console.log(fullwords.join(' '));
  }
  function getRandomword(max) {
    return Math.floor(Math.random() * (max)) ;
}
play()

  
  
 
 
  
  
  
