
# Title
<span class="title">
Rock-Paper-Scissors
</span>


## Summary
<span class="summary">
Practice variable declaration, debugging, and handling user input by making your own rock-paper-scissors game
</span>

<span class="tags">
## Tags
variables user-input conditional-statements
</span>

<span class="content">
## Before You Start
If you haven't already, I would recommend going HERE to make sure you are all set up with a text editor. The point of this website is to make some games with minimal setup, but you will still need a few things

## Intro
Ok, so we are going to make rock-paper-scissors using JavaScript! Making this game is a great exercise in declaring variables, working with conditional statements, debugging, and seeing how your JavaScript code will run. Feel free to give it a shot on your own before reading the tutorial. I will go over how to run your code using Chrome in the next section.

### Setup
Go ahead and make a directory (folder). This is where you are going to be saving your JavaScript file. Open up your text editor, make a new file, and save it to the directory. Whatever you name the file, be sure to add .js to the end (ex. rock-paper-scissors.js). Adding the .js will allow your text editor to highlight the JavaScript syntax appropriately, provide you with snippits (add a link here), etc.

Open Google Chrome and create a new Script snippit. This is what we will be using to test our code.

## Whiteboarding

### What is Whiteboarding
Whiteboarding is a common practice used in coding interviews. Instead of typing out the solution to a problem, you will be required to write/draw out the solution on a whiteboard. This allows someone to talk through the problem out loud, demonstrating their communication and problem solving skills.

Obviously, this is not a coding interview. However, it is still important to think through the problem before diving in and blindly coding. Let's take a moment to consider what we will need to create in order to make this game.

### Breaking Down Rock-Paper-Scissors
In order for this game to work, we are going to need the following:

1. A way for the user to choose rock, paper, or scissors
2. A way for the computer to chose rock, paper, or scissors
3. A way to determine who won based on the user choices

You could argue that as these three items could be broken down into smaller items, they are too general. However, for the purpose of this tutorial they will work.

## User Input

### Prompt
Normally, a form would be used to gather user input on a website. However, as we are not using and HTML we can user the built in prompt method.

The syntax for which is as follows.

```javascript
prompt('Give me an input')
```

### Declaring the User Input Variable
Knowing about prompt, we can know gather our user input. Let's go ahead and declare our first variable. userChoice would be an appropriate name.

```javascript
var userChoice = prompt('Please choose rock, paper, or scissors.');
```

You can use a console.log to ensure that this is working correctly (ADD GIF)

## Computer Choice

### Make it Random
We could write our code so that the computer will always choose the same thing, but that would not be very interesting. Using another method, we can make the choice random each time the game is played. Math.random() will generate a number between 0 and 1. Try plugging it into the console a few times to see what it produces. In our code, we can assign the computerChoice variable as follows.

```javascript
var computerChoice = Math.random();
```

### Determining the Choice
Now that we have a randomly generated number between 0 and 1 every time we run our code, we can use it to determine if the computer chose rock, paper, or scissors.One way to do so is as follows.

* IF the computerChoice is less than .333, the computer chose rock
* IF the computerChoice is greater or equal to .333 and less than .666, the computer chose paper
* IF the computerChoice is anything ELSE, the computer chose scissors

In JavaScript, that would look something like this.

```javascript
if (computerChoice < .333) {
  computerChoice = 'rock';
} else if (computerChoice >= .333 && computerChoice < .666) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}
```

### Check In
So far, our code should look like this.

```javascript
var playerChoice, computerChoice;
playerChoice = prompt('Choose rock, paper, or scissors');
computerChoice = Math.random();

if (computerChoice < .333) {
  computerChoice = 'rock';
} else if (computerChoice >= .333 && computerChoice < .666) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}
```

## Determine the Winner

### Win Condition
We know that rock beats scissors, paper beats rock, and scissors beats paper. We can determine the winner using some if else statements. This will be similar to how we chose the computerChoice.

* IF the userChoice is the same as the computerChoice, the game is a tie
* IF the userChoice is rock and the computerChoice is scissors, the user wins the game
* IF the userChoice is paper and the computerChoice is rock, the user wins the game
* IF the userChoice is scissors and the computerChoice is paper, the user wins the game
* IF the result is anything ELSE, the user loses the game

Notice that we do not need to handle the computer choices as well. We have handled the outcomes in which a user can win, and in which the game is a tie. Therefore, if there is any other result we know that the user has lost. We can use the alert method to display the results in an alert box. Give it a shot in the console! (GIF HERE)

We will need to combine the userChoice and computerChoice variables with the appropriate text in order to accurately represent a winner or loser.

```javascript
if (playerChoice === computerChoice) {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. Tie Game.')
} else if (playerChoice === 'paper' && computerChoice === 'rock') {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
} else {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Lose.')
}
```

## Review

### The Code
The full code for this game looks like this.

```javascript
var playerChoice, computerChoice;
playerChoice = prompt('Choose rock, paper, or scissors');
computerChoice = Math.random();

if (computerChoice < .333) {
  computerChoice = 'rock';
} else if (computerChoice >= .333 && computerChoice < .666) {
  computerChoice = 'paper';
} else {
  computerChoice = 'scissors';
}

if (playerChoice === computerChoice) {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. Tie Game.')
} else if (playerChoice === 'paper' && computerChoice === 'rock') {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
} else if (playerChoice === 'rock' && computerChoice === 'scissors') {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
} else if (playerChoice === 'scissors' && computerChoice === 'paper') {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Win.')
} else {
  alert('You chose ' + playerChoice + ', and the computer chose ' + computerChoice + '. You Lose.')
}
```

(GIF HERE)
### Extra Credit
Congratulations! You just made a game in about 20 lines of code! However, it is by no means bullet proof. For example, what if the user types in ROCK, or Rock, instead of rock. As it stands, our code does not know what to do in this situation. If you would like to fix this issues, I recommend looking at this (LINK tolowercase) method. A more thorough way of handling this could be achieved by using a DO WHILE (LINK) loop, but it is more advanced.


</span>
