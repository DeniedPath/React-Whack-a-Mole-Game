'use client'

import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import ScoreBoard from './Scoreboard';

const Game = () => {
  // State for the score and the grid
  const [score, setScore] = useState(0); // Keeps track of the player's score
  const [grid, setGrid] = useState(new Array(9).fill(false)); // Represents the game grid (9 mole holes)

  // Function to handle when a mole is clicked
  const handleMoleClick = (index) => {
    if (grid[index]) { // If the clicked grid cell has a visible mole
      setScore(score + 1); // Increment the score
    }
  };

  // useEffect to control mole appearance timing
  useEffect(() => {
    // Function to randomly show a mole in one of the grid cells
    const highlightMole = () => {
      const newGrid = new Array(9).fill(false); // Reset all cells to no mole
      const randomIndex = Math.floor(Math.random() * 9); // Pick a random index between 0 and 8
      newGrid[randomIndex] = true; // Set one cell to have a visible mole
      setGrid(newGrid); // Update the grid state
    };

    highlightMole(); // Show the first mole when the game starts

    const moleTimer = setInterval(highlightMole, 1000); // Move the mole every second

    return () => clearInterval(moleTimer); // Cleanup interval when component unmounts
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="game">
      <h1>Whack-a-Mole</h1>
      {/* ScoreBoard displays the current score */}
      <ScoreBoard score={score} />
      {/* Grid renders the game grid and passes click logic */}
      <Grid grid={grid} onMoleClick={handleMoleClick} />
    </div>
  );
};

export default Game;
