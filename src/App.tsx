import React from "react";
import "./App.css";
import "./index.css";
import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App h-screen">
      <header className="App-header">
        <p>Lets's Play Tic Tac Toe :)</p>
      </header>
      {/* <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-red-500 hover:bg-green-700">
        Click me
      </button> */}
      <Game numberOfColumns={3} />
    </div>
  );
}

export default App;
