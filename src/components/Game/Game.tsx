import React from "react";

// import { getWinningCombinationFor } from "./gridHelper";

interface GameProps {
  numberOfColumns?: number;
}

const Game: React.FC<GameProps> = ({ numberOfColumns: columnConfig }) => {
  return <div></div>;
};

Game.defaultProps = {
  numberOfColumns: 3,
};

export default Game;
