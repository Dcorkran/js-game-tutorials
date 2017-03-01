# Title
<span class="title">
Magic Eight-Ball
</span>

## Summary
<span class="summary">
Practice working with arrays, loops, and handling user input by making your own Magic Eight-Ball
</span>

<span class="tags">
## Tags
loops arrays user-input
</span>

<span class="content">
## Before You Start
If you haven't already, I would recommend [going here](http://www.jsgametutorials.rocks/tutorial/start-here) to make sure you are all set up with a text editor. The point of this website is to make some games with minimal setup, but you will still need a few things

## Intro
Let's make a magic eight-ball with JavaScript! It is a great exercise that allows some practice with a few fundamental concepts. As always, I will go over how to run your code using Chrome. In the gifs shown, the code will be in the dev-tools snippit. However, I recommend writing your code in a text editor, and then copying and pasting it over to the snippit.

### Setup
Go ahead and make a directory (folder). This is where you are going to be saving your JavaScript file. Open up your text editor, make a new file, and save it to the directory. Whatever you name the file, be sure to add .js to the end (ex. eight-ball.js). Adding the .js will allow your text editor to highlight the JavaScript syntax appropriately.

Open Google Chrome, open your developer tools, navigate to the sources tab, and create a new Script snippit. This is what we will be using to test our code.

![Open Snippet Gif](https://media.giphy.com/media/1iW2iDiLX3oVYNu8/giphy.gif)

### What Goes Into an Eight-ball?
A magic eight-ball allows you to ask a question, shake a physical object, and get an answer to your question. Leaving the physical part out of it, we can already see a few things that we will need to tackle this problem.

1. A list of answers for the computer to chose from
2. A question, asked by the user
3. A way for the computer to pick one answer
4. A way for the computer to display the question and the answer

Four items seems pretty manageable! Let's get started.

## User Input

### Prompt

If you have already completed the rock-paper-scissors tutorial, this will look familiar. We can use the prompt method to get our user input for the eight-ball. The syntax is as follows:

```javascript
prompt('Give me an input');
```

While it isn't completely necessary, we can use this prompt to personalize the game to our user! Let's get their name.

```javascript
var name = prompt('Please enter your name.');
```

This will set the name variable to whatever the user enters into the prompt window.

## Arrays
Arrays are a fundamental part of any programming language. Instead of setting a variable to = 'dog', using arrays you can set a variable that contains the strings 'dog', 'cat', 'cow', etc. That is only one example. In JavaScript, your array can contain any data type. You could have an array with a string, int, object, and even another array! For some examples, check out the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Accessing Data in Arrays
Arrays are 0 indexed. This means that the first element in your array will be accessed at index 0. Before plugging the following example, what do you think will be logged in the console? Think about it for a second and then try it for yourself.

```javascript
var myArray = ['cat','dog',42];
console.log(myArray[1]);
```

You can change the 1 to either 0 or 2 to access the other elements.

### Making the Answer Array
Now that we know a little bit about arrays, let's use one to store our potential answers. Feel free to change my example to contain whatever answers you would like!

```javascript
var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
```

## Do/While loops
A do/while loop allows us to repeatedly run some code until a certain condition is no longer true. Here is an example:
```javascript
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

If you run this in dev-tools you will notice that your console will log 0 through 9. On the first line we declared the variable i which starts at 0. The do/while loop will run the code on lines 3 and 4 as long as i is less than 10. If you have never seen the syntax i++ before, it is the same thing as saying i = i + 1. This means that on each iteration of the loop, i will increase by one and the console will log it until i is equal to 10 in which case the loop will end. Be careful with these, as it is very easy to create a scenario in which the loop never ends, i.e an infinite loop.

### The Game Loop
You guessed it, we are going to use a do/while loop for our magic eight-ball. It is not entirely necessary, but if we did not include it the user would have to run the code each time they wanted to play! The majority of our code will be contained in this loop.

The first thing that we need to include in our loop should be the question being asked. We can use another prompt for this.

Including our answer array and the empty do/while loop the code should at this point look like this:

```javascript
var name = prompt('Please enter your name.');
var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
do {
  var question = prompt('Welcome ' + name + '. What is your question?');
} while (true);
```

Don't run your code just yet! In it's current state there is no way to break out of the loop. If you were to run it, you would see something like this:

![Infinite Loop](https://media.giphy.com/media/l4lRcRG016xSmncYw/giphy.gif)

Notice that when we prompt the user for the question we are also adding the name variable. If the user entered Dillon for their name, the prompt would say: Welcome Dillon. What is your question?

The loop might still look a little confusing, but it will make more sense once we finish the game logic.

### Exiting the game

Before we go any further we should create a way for the loop to end. In this case, we want the game to run until the user hits cancel.

Go ahead and create another snippet and run this code:

```javascript
var test = prompt('Enter a thing');
console.log(test);
```

Null! We can use this value to determine whether our game should continue or stop. We are going to need to use a conditional statement as well.

The code for that could look something like this:

```javascript
if (question === null) {
  break;
}
```

You may not have seen break before. In this case, if we pass the condition where the question is equal to null, our code will run into this break. It will immediately break out of the do/while loop and begin running the code after the loop (in our case there is none). You can read more about break [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)

Our code should look like this:

```javascript
var name = prompt('Please enter your name.');
var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
do {
  var question = prompt('Welcome ' + name + '. What is your question?');
  if (question === null) {
    break;
  }
} while (true)
```

We now have a way to break out of the loop! Let's update the looping condition to make more sense. We want the game to continue as long as the user does not press cancel, which would make our question variable equal to null. Similar to how we handled the if statement condition, we can change our while condition to the following.

```javascript
do {
  var question = prompt('Welcome ' + name + '. What is your question?');
  if (question === null) {
    break;
  }
} while (question !== null)
```

This is telling us, 'DO the chunk of code that handles our game logic WHILE the question variable is not equal to null.' You might be thinking, "didn't we already handle the logic that will break out of the loop? Isn't the while condition redundant?" You are right, but we still need something for the loop to check to see if it should continue running. If you would like, you can change the condition to something like this:

```javascript
while (question !== 'done')
```

This would make it so that if the user typed the word done into the prompt, the loop would end.

## Picking the Answer

Going off of our IF, we can use ELSE to handle what would happen if the user asks a question.

We need to take one answer from our array containing all of the available answers. We know that we can access data within an array by using an index. In this example, it would look something like this:

```javascript
var answer = answers[0];
```
That would set our answer variable to the value of the first item in our answer array. However, that would not be very fun for the user. Each time the game is played, they would only get the first answer. We should make it random.

### Picking a Random Answer

Try running the following code:

```javascript
Math.floor(Math.random() * 10);
```

![Random Index](https://media.giphy.com/media/l4FGqIFTtdn5cXxZK/giphy.gif)

Let's break down what is happening. Math.floor is a method which takes a number and returns the nearest whole number rounded down. For example, if we ran the following code, we would see it returning 3:

```javascript
Math.floor(3.95)
```

Math.random is a method that returns a number between 0 and 1. If we take that number and multiply it by the length of our array, we can use it to generate a random index! However, we need to round that number down because the computer would not know how to interpret us trying to access an array at index 3.18923.

So, our combined code that allows us to get a random index will look like the following:

```javascript
var answer = answers[Math.floor(Math.random() * answers.length)];
```

Combining the methods Math.floor, Math.random, and by accessing the length property of our answers array, our code is now fully dynamic! We could add or remove anything to our answer array and the game would still work as intended. This code should be inserted within an ELSE statement after our IF.

### Display the answer

We only need one more line of code! Let's take a step back and see what we have so far.

```javascript
var name = prompt('Please enter your name.');
var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
do {
  var question = prompt('Welcome ' + name + '. What is your question?');
  if (question === null) {
    break;
  } else {
    var answer = answers[Math.floor(Math.random() * answers.length)];
  }
} while (question !== null);
```

Within our else, we are giving the computer an answer, but it is not being displayed yet. We can handle that with an alert. alert() is similar to a prompt, but requires no input from a user. We pass the string that we want the alert to display inside of the parenthesis.

![Alert](https://media.giphy.com/media/26gR1EI4COWuEWjOE/giphy.gif)

Using alert, and combining a few of our variables, we can now display the question and the answer! The code looks like this:

```javascript
alert('The question was: ' + question +'\n' + 'The magic 8-ball says: ' + answer);
```

Our question variable will be set to whatever the user entered into the prompt, and our answer variable is set to a random answer. MAKE SURE \n WORKS!!!! '\n'  allows us to display the string after it on a separate line.

Here is our finished code!

```javascript
var name = prompt('Please enter your name.');
var answers = ['It is certain.', 'Maybe next time.', 'Try again later.','Not a chance.','Answer unclear','My sources say no.'];
do {
  var question = prompt('Welcome ' + name + '. What is your question?');
  if (question === null) {
    break;
  } else {
    var answer = answers[Math.floor(Math.random() * answers.length)];
    alert('The question was: ' + question +'\n' + 'The magic 8-ball says: ' + answer);
  }
} while (question !== null);
```

## Conclusion

![eight-ball](https://media.giphy.com/media/xUA7aLRNGHuANX7ZQs/giphy.gif)

You just made a thing! It might not change the world but it should have allowed you some practice with a few fundamental JavaScript concepts. Feel free to make it your own. You could add some different answers or make something happen given a certain user input!

</span>
