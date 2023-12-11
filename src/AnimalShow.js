import { useState } from "react";
import bird from "./assets/images/bird.svg";
import cat from "./assets/images/cat.svg";
import cow from "./assets/images/cow.svg";
import dog from "./assets/images/dog.svg";
import gator from "./assets/images/gator.svg";
import heart from "./assets/images/heart.svg";
import horse from "./assets/images/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  horse,
  gator,
};

export default function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div
      onClick={handleClick}
      className="position-relative border border-1 shadow rounded-3 p-3 m-3"
    >
      <img
        alt="animal"
        src={svgMap[type]}
        style={{ height: "200px", width: "200px" }}
        className="d-flex"
      />
      <img
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px", bottom: "10%", right: "10%" }}
        className="position-absolute"
      />
    </div>
  );
}
