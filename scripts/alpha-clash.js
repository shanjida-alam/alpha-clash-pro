function continueGame()
{
    // step -1 : generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function setBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}

function getARandomAlphabet()
{
    // get or create  an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}
function play()
{
    // console.log('Play start now');

    // hide the home screen
    // show the play ground
    const homeSection = document.getElementById('home');
    const playSection = document.getElementById('play-ground');
    // step 1: hide the home screen. to hide the home screen add the class hidden to the home section
    homeSection.classList.add('hidden');
    playSection.classList.remove('hidden');
    continueGame();
}