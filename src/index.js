//tictactoe using react hooks

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Square = props => {
  return (
    <button className="square" onClick={props.clicked}>
      {props.number}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(" "));
  const [isXNext, setisXNext] = useState(true);

  function resetGame() {
    setSquares(Array(9).fill(" "));
  }

  function updateSquares(sign, i) {
    const nextSquares = [...squares];
    setSquares(nextSquares);
    nextSquares[i] = isXNext ? "o" : "x";
    setisXNext(!isXNext);
  }

  function renderSquare(i) {
    return (
      <Square
        number={squares[i]}
        clicked={() => {
          updateSquares("x", i);
        }}
      />
    );
  }

  const status = isXNext ? "o" : "x";

  return (
    <div>
      <div className="status">Next Player : {status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="reset" onClick={resetGame}>
        New Game
      </div>
    </div>
  );
};

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
