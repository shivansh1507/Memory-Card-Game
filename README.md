The project is live at [LiveNow](https://memory-card-game-bottleshop.netlify.app/)
![Screenshot](https://raw.githubusercontent.com/shivansh1507/Memory-Card-Game/main/memory%20Card%20game%20look.png)

![Screenshot](https://raw.githubusercontent.com/shivansh1507/Memory-Card-Game/main/Bottleshop%20win%20page.png)

## Card Component

    Represents an individual card ✓
    Shows a hidden side initially (e.g., a question mark) and reveals a number or symbol when clicked ✓

##  GameBoard Component

    Displays a grid of Card components ✓
    Uses useState to manage game state, including card values, flip state, and match checking ✓
    Shuffles card values randomly at the start of the game ✓

##  Game Logic

    Allows flipping two cards at a time ✓
    Keeps flipped cards face-up if they match; otherwise, flips them back face-down ✓
    Tracks and displays the player's score (number of matched pairs) ✓

##  Win Condition

    Checks if all pairs have been matched and displays a victory message when the game is won ✓

##  User Interaction

    Ensures cards respond correctly to user clicks, preventing more than two cards from being flipped simultaneously ✓

##  Bonus Features

    A timer tracks how long it takes to complete the game ✓
    A "New Game" button to reset the game and shuffle the cards for a new round ✓

##  Additional Enhancements

    Made the game responsive to different screen sizes with media queries ✓
    Added a celebration animation when the game is won ✓

##  Considerations

Ensure the following for completeness and a polished experience:

    Testing across devices: Verify the game's responsiveness and functionality on various devices and screen sizes.
    Code optimization: Review the code for any potential optimizations or refactorings for readability and performance.
    User feedback: Test the game with actual users for feedback on usability, difficulty, and enjoyment.
