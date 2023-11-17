# ScrambleText
Scramble Text Vanilla Javascript

A text scramble effect is a way of animating text by randomly changing its characters until it reveals the final text. To create a text scramble effect using vanilla JavaScript, you can use the following steps:

- Define a function that takes a string as an argument and returns a string with the same length but with random characters. You can use the Math.random() method to generate random numbers and the String.fromCharCode() method to convert them to characters.
- Define a function that takes two strings as arguments and returns a boolean value indicating whether they are equal or not. You can use the === operator to compare them.
- Define a function that takes a string as an argument and returns an array of strings, each representing one character of the original string. You can use the split() method to do this.
- Define a function that takes an array of strings as an argument and returns a string by joining them together. You can use the join() method to do this.
- Define a function that takes two strings as arguments and returns a string that is the result of applying the text scramble effect. You can use the following logic:

  - Initialize an empty string to store the output.
  - Loop through each character of the first string and compare it with the corresponding character of the second string.
  - If they are equal, append the character to the output string.
  - If they are not equal, append a random character to the output string using the first function you defined.
  - Return the output string.

- Select an element from the HTML document where you want to display the text scramble effect. You can use the document.getElementById() method to do this.
- Define a variable to store the final text that you want to reveal.
- Define a variable to store the current text that is being displayed. Initialize it with an empty string.
- Define a variable to store the interval time in milliseconds between each animation frame. You can adjust this value according to your preference.
- Define a function that updates the current text by calling the last function you defined with the current text and the final text as arguments. Then, set the innerHTML property of the selected element to the current text. You can use setInterval() method to call this function repeatedly with the interval time you defined until the current text is equal to the final text. Then, you can use clearInterval() method to stop the animation.
