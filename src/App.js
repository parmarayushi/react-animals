import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "horse", "dog", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  // const [count, setCount] = useState(0);
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // setCount(count + 1);
    setAnimals([...animals, getRandomAnimal()]);
  };

  //use map instead of -> const renderAnimals=[<AnimalShow type={animal[0]} />,<AnimalShow type={animal[1]} />, ...]
  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="d-flex flex-column align-items-center p-3 h-100">
      <button className="btn btn-primary fs-4" onClick={handleClick}>
        Add Animal
      </button>
      {/* <div>Number of animals: {count}</div> */}
      <div className="d-flex flex-wrap justify-content-center overflow-auto m-2">
        {renderAnimals}
      </div>
    </div>
  );
}

export default App;
