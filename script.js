let randomNumber=parseInt(Math.random()*100 +1)


const submit=document.querySelector('#subt') // submit button activity
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining= document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const highScore=document.querySelector('#hs')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true

if(playGame){
  submit.addEventListener('click', function(event){
    event.preventDefault()
    const guess=parseInt(userInput.value)
    
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number ')
  }
  else if(guess<1){
    alert('please enter a valid number ')
  }
  else if(guess>100){
    alert('please enter a valid number ')
  }
  else{
    prevGuess.push(guess)
    if(numGuess >10){
      displayGuess(guess)
      displayMessage(` GAME OVER || NUMBER WAS : ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)

    }
  }

}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`YOU GUESSED IT CORRECT \n ATTEMPTS:${numGuess-1}`)
    endGame()
    
  }
  else if(guess<randomNumber){
    displayMessage('NUMBER ENTERED IS LOW || ENTER HIGHER ')
  }
  else{
    displayMessage('NUMBER ENTERED IS HIGH || ENTER LOWER ')
  }

}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML +=`${guess} , `
  numGuess++;
  remaining.innerHTML =`${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}

function endGame(guess){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button') // to add class to the element
  p.innerHTML='<button id="newGame">Start new Game</button>'
  startOver.appendChild(p)
  playGame=false
  if(parseInt(highScore.innerText)>=(numGuess-1)){
    highScore.innerHTML=`${numGuess-1}`
  }
 
  newGame()
}

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener( 'click', function(event){
    randomNumber=parseInt(Math.random()*100 +1)
    
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)


  })



}
