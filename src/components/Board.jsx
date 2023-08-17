import React, { Fragment } from "react";
import { useState } from "react";

import { motion, AnimatePresence, spring } from "framer-motion";
import Slot from "./Slot";

const Board = () => {
  const [slot, setSlot] = useState(Array(9).fill(null));
  const [turnX, setTurnX] = useState(true);
  const [exitComp, setExitComp] = useState(true);

  //Framer-Motion
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08, //0.2 for each child delaying it's transition by 0.2s
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  //Framer-Motion end

  const clickBtn = (index) => {
    if (slot[index] !== null) return;
    // console.log(index, "clicked");
    const currSlot = [...slot];
    currSlot[index] = turnX ? "⭐" || "X" : "⭕" || "0";
    setSlot(currSlot);
    setTurnX(!turnX);
  };

  const checkWinner = () => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPattern) {
      const [a, b, c] = pattern;
      if (slot[a] !== null && slot[a] === slot[b] && slot[a] === slot[c]) {
        // handleUnmount();
        return slot[a];
      }
    }
    return;
  };

  const isWinner = checkWinner();

  return (
    <>
      <motion.h1
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.2}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 150, duration: 0.1 }}
      >
        Tic Tac Toe
      </motion.h1>

      {isWinner ? (
        // Victory Message
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0 }}
        >
          <h3>
            {isWinner} won!!! <br /> ❤️❤️❤️{" "}
          </h3>
          {/* <motion.button
            className="playAgain"
            whileTap={{ scale: 0.95 }}
            onClick={() => setSlot(Array(9).fill(null))}
          >
            Play Again
          </motion.button> */}
        </motion.div>
      ) : (
        // Game Board
        <Fragment>
          <h3>Next turn: {turnX ? "⭐" || "X" : "⭕" || "0"}</h3>
          <motion.div
            className="board-container"
            variants={container}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setExitComp(false)}
          >
            <Slot
              turnX={turnX}
              slot={slot[0]}
              onClick={() => clickBtn(0)}
              variants={item}
            />
            <Slot
              slot={slot[1]}
              onClick={() => clickBtn(1)}
              variants={item}
              turnX={turnX}
            />
            <Slot
              slot={slot[2]}
              onClick={() => clickBtn(2)}
              variants={item}
              turnX={turnX}
            />

            <Slot
              slot={slot[3]}
              onClick={() => clickBtn(3)}
              variants={item}
              turnX={turnX}
            />
            <Slot
              slot={slot[4]}
              onClick={() => clickBtn(4)}
              variants={item}
              turnX={turnX}
            />
            <Slot
              slot={slot[5]}
              onClick={() => clickBtn(5)}
              variants={item}
              turnX={turnX}
            />

            <Slot
              slot={slot[6]}
              onClick={() => clickBtn(6)}
              variants={item}
              turnX={turnX}
            />
            <Slot
              slot={slot[7]}
              onClick={() => clickBtn(7)}
              variants={item}
              turnX={turnX}
            />
            <Slot
              slot={slot[8]}
              onClick={() => clickBtn(8)}
              variants={item}
              turnX={turnX}
            />
          </motion.div>
        </Fragment>
      )}

      <motion.button
        className="playAgain"
        variants={container}
        whileTap={{ scale: 0.95 }}
        onClick={() => {setSlot(Array(9).fill(null)) , () => setExitComp(false)}}
      >
        Play Again
      </motion.button>
    </>
  );
};

export default Board;
