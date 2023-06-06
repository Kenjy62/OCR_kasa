// Required
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
      className="slider--container"
      style={{ backgroundImage: `url(${background})` }}
    >
      {bgLenght > 0 ? (
        <>
          <div
            className="slider--container--prev"
            onClick={() => changeBg("decrement")}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            className="slider--container--next"
            onClick={() => changeBg("increment")}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </>
      ) : null}
    </div>
  );
}
