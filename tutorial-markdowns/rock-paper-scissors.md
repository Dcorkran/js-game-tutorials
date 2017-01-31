
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
var userChoice = prompt('Please choose rock, paper, or scissors.')
```

### Code Snippet

```javascript
function test(app){
  app = 2;
  return app
}
```
</span>
