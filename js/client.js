import { nouns } from './nouns.js';
import { animals } from './animals.js';
import { randUtil } from './random.js';

const init = function(){
  console.log(nouns);
  console.log(animals);
  console.log(randUtil);
}


function renderWords() {
  // make container for first h1
  const phrase = document.querySelector('#word1');
  
  // make container for second h1
  const phrase2 = document.querySelector('#word2');
  
  // Change inner text to a random item on nouns array
  const newPhrase = phrase.innerText = randUtil.randArrayItem(nouns);
  const newPhrase2 = phrase2.innerText = randUtil.randArrayItem(nouns);
}

// Grabbing the button from html
// Placing inside "btn" container
const btn = document.querySelector('button');

btn.addEventListener("click", renderWords);

window.addEventListener('load', init);