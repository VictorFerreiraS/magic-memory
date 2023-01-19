import { useEffect, useState } from "react";
import "./App.css";
import MemoryGame from "./components/MemoryGame/MemoryGame";
import SingleCard from "./components/SingleCard./SingleCard";



// SEPARR EM CONTROLER (logica) E VIEW (jsx)

function App() {

  return (
    <div className="App">
      <MemoryGame />
    </div>
  );
}

export default App;
