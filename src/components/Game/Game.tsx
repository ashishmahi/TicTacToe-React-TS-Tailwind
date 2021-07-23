import React, { useState } from "react";

import { getGridFor } from "./gridHelper";
import Board from "../Board/Board";

interface GameProps {
  numberOfColumns: number;
}

const Game: React.FC<GameProps> = ({ numberOfColumns }) => {
  const grid = getGridFor(numberOfColumns);
  return <Board grid={grid} />;
};

Game.defaultProps = {
  numberOfColumns: 3,
};

export default Game;
