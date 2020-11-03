//❏delare needed variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn__reset');
const tries = document.querySelectorAll('img');
const div = document.getElementById('overlay');




//❏Create a missed variable, initialized to 0
let missed = 0;

//❏Create an array named phrases.
const phrases = [
    'trick or treat',
    'thankful and blessed',
    'shopping is my cardio',
    'noel is magic',
    'cheers to a new year'
];

//❏Attach an event listener to the “Start Game” button to hide the start
//screen overlay
startGameBtn.addEventListener('click', () => {
    div.style.display = 'none';
});


// ❏Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
        return arr[Math.floor(Math.random()*arr.length)].split('')
    }
    

// ❏Add the letters of a sting to the display 

function addPhraseToDisplay (arr) {
        
    for(let i=0; i<arr.length; i++) {
        let liList = document.createElement('li');
        let ulList = document.querySelector('#phrase ul');
        liList.textContent = arr[i];
        ulList.appendChild(liList);
            if (liList.textContent === ' ') {
                liList.className = 'space';
            } else {
                liList.className = 'letter';

            }
        }
}
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// ❏Create a checkletter function
function checkLetter (button){

    //❏Store all of the li elements in a variable inside checkLetter
    let checkLetter = document.querySelectorAll('.letter');

    //❏Create a variable to store if a match is found and give it an initial value of null
    let match = null; 

    //❏Loop through all of the li elements. Remember: arrays start with index
    for (let i = 0; i <  checkLetter.length; i++){ 

        //❏Create a conditional that compares the text of the button parameter to
        //the text of the li at the current index of the loop
         if(checkLetter[i].textContent === button.textContent){
             
           // ❏If they match, add the “show” class to the li
           checkLetter[i].classList.add('show');

            //❏If they match, store the button text in the match variable
            match = true;
         }

    }
    //❏Once the loop completes, return the match variable
    return match;
};

//❏ Add an event listener to the keyboard
qwerty.addEventListener('click', (e) => {

    //❏ Use a conditional to filter out clicks that don’t happen on the buttons or if the
    //button already has the “chosen” class
    if(e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
    } if (e.target.className === 'chosen') {
        e.target.disabled = 'true';

        //❏ Call the checkLetter function and store the results in a variable.
        let letterFound = checkLetter(e.target);

        //❏ If the checkLetter function does not find a letter, remove one of the heart
        //images and increment the missed counter
        if (letterFound === null) {
            missed ++;
            tries[missed - 1].src = "images/lostHeart.png";
        }
    }
});

//❏ Create a checkWin function
function checkWin () {
//❏ Create a variable to store the li elements that have the class name “letter”
let letter = document.querySelectorAll('.letter');
let show = document.getElementsByClassName('show'); 

//❏ Check if the length of the 2 variables are the same. If they are, display the win
//overlay and ❏ Create the win overlay by adding the “win” class to the start overlay.
if (letter.length === show.length) {
    overlay.className = 'win';

    //❏ Change the headline text of the start overlay to show a person won.
    document.querySelector('h2.title').innerHTML = 'You win !';

    //❏ Change the display property of the overlay to “flex”
    overlay.style.display = "flex";

    //❏ Check if the missed counter is greater than 4. If they are, display the lose overlay
    if(missed > 4) {

        //❏ Create the lose overlay by adding the “lose” class to the start overlay.
        overlay.className = 'lose';

       // ❏ Change the headline text of the start overlay to show a person lost.
        document.querySelectorlector('h2.title').innerHTML = 'You lose !'

        //❏ Change the display property of the overlay to “flex”
        overlay.style.display = "flex";
    }
    
    checkWin();
}
}
