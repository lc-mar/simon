# Simon Says Game

This is a simple implementation of the Simon Says game using JavaScript. The game involves remembering and repeating a sequence of colors presented by the computer.

## Getting Started

To play the Simon Says game, follow these steps:

1. Open the HTML file in a web browser.
2. The game will start automatically when you press any key on your keyboard.
3. Pay attention to the sequence of colors shown by the computer.
4. Click on the buttons to repeat the sequence.
5. If you make a mistake, the game will end and you can restart by pressing any key.

## How It Works

The JavaScript code provided controls the behavior of the game. Here's an overview of the main components and functions:

- `buttonColors`: An array that holds the possible colors for the game buttons.
- `gamePattern`: An array that stores the randomly generated sequence of colors shown by the computer.
- `userClickedPattern`: An array that stores the sequence of colors clicked by the user.
- `started` and `level`: Variables used to track the game state and level.

### Event Listeners

- `$(document).keypress`: Listens for a keypress event to start the game. If the game has not started yet, it initializes the level and begins the sequence.
- `$(".btn").click`: Listens for clicks on the game buttons. It stores the color clicked by the user, plays a sound, and animates the button press. Then, it checks if the user's sequence matches the game's sequence and progresses to the next level if the sequence is correct.

### Functions

- `checkAnswer(currentLevel)`: Compares the user's clicked pattern with the game's pattern at the current level. If the patterns match, it checks if the user has completed the entire sequence. If so, it waits for a second and proceeds to the next level. If the patterns do not match, it plays a wrong sound, displays a game-over message, and restarts the game.
- `nextSequence()`: Generates the next color in the game's sequence. It clears the user's clicked pattern, increments the level, updates the level display, chooses a random color, adds it to the game's pattern, and displays the color's animation and sound.
- `animatePress(currentColor)`: Adds and removes a CSS class to create an animation effect when a button is pressed.
- `playSound(name)`: Plays an audio file corresponding to the given color.
- `startOver()`: Resets the game variables and allows the game to be started again from the beginning.

## Customization

You can customize the game by modifying the following aspects:

- `buttonColors`: You can add or remove colors from the `buttonColors` array to change the available options for the game buttons.
- CSS classes: You can modify the CSS styles and animations associated with the game buttons and other elements to change the visual appearance of the game.

Feel free to experiment and make the game your own!

## Credits

This Simon Says game implementation was created using HTML, CSS, and JavaScript. It is a simplified version inspired by the classic electronic game. 
Developed using the help of a Udemy course with Angela Yu.
