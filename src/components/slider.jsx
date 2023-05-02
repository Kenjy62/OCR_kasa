import { useState } from "react";
export default function Slider({ data }) {
  const [background, setBackground] = useState(data.pictures[0]);
  const [currentBg, setCurrentBg] = useState(0);
  const bgLenght = data.pictures.length - 1;

  function changeBg(f) {
    if (f === "increment") {
      if (currentBg < bgLenght) {
        setBackground(data.pictures[currentBg + 1]);
        setCurrentBg(currentBg + 1);
      } else {
        setBackground(data.pictures[0]);
        setCurrentBg(0);
      }
    } else if (f === "decrement") {
      if (currentBg > 0) {
        setBackground(data.pictures[currentBg - 1]);
        setCurrentBg(currentBg - 1);
      } else {
        setBackground(data.pictures[bgLenght]);
        setCurrentBg(bgLenght);
      }
    }
  }

  return (
    <div
      className="container-none h-52 bg-center rounded-lg flex flex-row justify-between items-center p-5"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="text-3xl text-white"
        onClick={() => changeBg("decrement")}
      >
        -
      </div>
      <div
        className="text-2xl text-white"
        onClick={() => changeBg("increment")}
      >
        +
      </div>
    </div>
  );
}
