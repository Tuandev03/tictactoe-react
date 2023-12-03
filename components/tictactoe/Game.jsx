import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../src/helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    boardCopy[index];
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div className="board-list">
      <Board cells={board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
      {/* {winner ? `Winner is ${xIsNext ? "O" : "X"}`: ""} */}
    </div>
  );
};

export default Game;
