# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-x2bca9?file=2-BMICalculator%2Findex.html,1-colorChanger%2Fchaiaurcode.js)

# Solution Code

## Project 1 (Background Changer)

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body')

buttons.forEach(function(button){
      console.log(button)
      button.addEventListener('click',function(e){
          console.log(e)
          console.log(e.target)
         if(e.target.id === 'grey'){
           body.style.backgroundColor = e.target.id
          } 
          if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
           }
           if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
           }
           if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
           } 
           if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
           }   
           if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
           }     
        })
})

```

## Project 2 (BMI Calculator)

```javascript
const form = document.querySelector('form')
// this use case will give you empty value
//const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === "" || height < 0 || isNaN(height)){
      results.innerHTML = `Please give a valid height ${height}`
    } else if(weight === "" || weight < 0 || isNaN(weight)){
      results.innerHTML = `Please give a valid weight ${weight}`
    } else {
      const bmi = (weight/((height*height)/10000)).toFixed(2)
      // show the result
            results.innerHTML = `<span>${bmi}<span>`

      const bmiResponse = document.querySelector("#message")      
      if(bmi <= 18.6){
        bmiResponse.innerHTML = `- You are Under Weight`
      }else if(18.6 < bmi <= 24.9){
        bmiResponse.innerHTML = `- You have a normal weight`
      }else if( bmi => 24.9){
        bmiResponse.innerHTML = `- You are OverWeight`
      }
    }


  
})


```

## Project 3 (Digital Clock)

```javascript
   const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

```

## Project 4 (Guess the Number)

```javascript
   let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let NumGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a Valid Number');
  } else if (guess < 1) {
    alert('Please enter a Number More than 1');
  } else if (guess > 100) {
    alert('Please enter a Number less than 100');
  } else {
    prevGuess.push(guess);
    if (NumGuess > 10) {
      displayGuess(guess);
      displayMessage(`GameOver, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  UserInput.value = '';
  guessSlot.innerHTML += `${guess} ,`;
  NumGuess++;
  remaining.innerHTML = `${11 - NumGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  UserInput.value = '';
  UserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  StartOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - NumGuess}`;
    UserInput.removeAttribute('disabled');
    StartOver.removeChild(p);

    playGame = true;
  });
}


```




## Project 5 (Keyboard Check)

```javascript

console.log('Project 5');

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td> ${e.key === ' ' ? 'Space' : e.key} </td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `
})

```

## Project 6 (Unlimited Colors)

```javascript
   const RandomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i < 6;i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
let IntervalId
const StartchangingColor = function(){
   if(!IntervalId){
    IntervalId = setInterval(changebgColor, 1000)
   }

   function changebgColor(){
    document.body.style.backgroundColor = RandomColor()
   }
   
}

const StopchangingColor = function(){
   clearInterval(IntervalId)
   IntervalId = null
}

document.querySelector('#start').addEventListener('click', StartchangingColor)

document.querySelector('#stop').addEventListener('click', StopchangingColor)

```