import React from "react";
interface BoardProps {
  grid: string[][];
}
const Board: React.FC<BoardProps> = ({ grid }) => {
  return (
    <div className="w-min m-auto flex-col flex h-full justify-center items-center">
      {grid.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className="border">
            <div className="flex flex-row">
              {row.map((cell, cellIdex) => {
                return (
                  <div
                    key={`cell-${cellIdex}`}
                    className="border border-green-400 h-20 w-20 flex justify-center items-center"
                  >
                    {cell}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
