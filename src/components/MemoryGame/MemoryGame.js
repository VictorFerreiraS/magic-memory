import { useEffect, useState } from "react";
import SingleCard from "../SingleCard./SingleCard";
import MemoryGameControler from "./MemoryGameControler";
import MemoryGameView from "./MemoryGameView";

// Data

export default function MemoryGame() {
  return (
    <div>
      <MemoryGameControler />
    </div>
  );
}
