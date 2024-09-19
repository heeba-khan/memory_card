# Pokémon Memory Game

## Overview

The **Pokémon Memory Game** is a card-based game where players test their memory skills by clicking on unique Pokémon cards without repeating any selection. The goal is to click all cards once without clicking any card twice, with difficulty levels offering different numbers of cards to challenge the player.

## Features

- **Dynamic Data Fetching**: The game fetches Pokémon data from the **PokeAPI** at the start of the game based on the selected difficulty level.
  
- **Three Difficulty Levels**:
  - **Easy**: 4 cards
  - **Medium**: 8 cards
  - **Hard**: 12 cards

- **Card Shuffling**: After each card click, the cards are shuffled to make the game more challenging.

- **State Management**: Utilizes React's hooks to manage game state, including tracking the player's score, high score, and clicked cards.

- **Score & High Score Tracking**: Real-time tracking of the player’s score and high score.

- **Win and Game Over Conditions**: 
  - **Game Over**: When a player clicks a card that has already been clicked, the game ends.
  - **Game Win**: When all cards are clicked without repetition, the player wins.


## How to Play

1. Choose a difficulty level.
2. Start clicking on the Pokémon cards, making sure not to click the same card twice.
3. The cards will shuffle after each click.
4. Track your score and try to set a new high score.

## Tech Stack

- **React**: Used for building interactive user interfaces and managing component states.
- **JavaScript (ES6+)**: Core language for implementing game logic.
- **PokeAPI**: Provides real-time data on Pokémon used in the game.
- **CSS**: Custom styles for a responsive and user-friendly design.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/heeba-khan/memory_card.git

2. Navigate to the project directory::
   ```bash
   cd memory_card

3. Install dependencies::
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm start


## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

1. PokeAPI: For providing the Pokémon data that powers the game.
2. FontAwesome: For the icon used in the game interface.
3. React Community: For the ongoing support and resources that help make building applications easier.
