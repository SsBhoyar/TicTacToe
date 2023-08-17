import React, { useState } from 'react';
import { motion, spring } from 'framer-motion';
import './App.css';
import Board from './components/Board';

const App = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [xIsNext, setXIsNext] = useState(true);

//   const handleClick = (index) => {
//     if (board[index] || calculateWinner(board)) return;

//     const newBoard = [...board];
//     newBoard[index] = xIsNext ? 'X' : 'O';

//     setBoard(newBoard);
//     setXIsNext(!xIsNext);
//   };

//   const renderSquare = (index) => (
//     <button className="square" onClick={() => handleClick(index)}>
//       {board[index]}
//     </button>
//   );

//   const winner = calculateWinner(board);
//   const status = winner
//     ? `Winner: ${winner}`
//     : `Next player: ${xIsNext ? 'X' : 'O'}`;

//   return (
//     <div className="game">
//       <div className="game-board">
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {renderSquare(0)}
//           {renderSquare(1)}
//           {renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {renderSquare(3)}
//           {renderSquare(4)}
//           {renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {renderSquare(6)}
//           {renderSquare(7)}
//           {renderSquare(8)}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Function to determine the winner of the game
// const calculateWinner = (squares) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
  
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
  
//   return null;

return (
  <>
    
    <Board />
  </>
)
};

export default App;
