import { useState } from "react";
import Gameplay from "./Components/GamePlay/GamePlay";
import PlayingGame from "./Components/PlayingGame/PlayingGame";
function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const handleClick = () => {
    setIsGameStart(true);
  };
  return (
    <>
      {isGameStart ? <PlayingGame /> : <Gameplay handleClick={handleClick} />}
    </>
  );
}

export default App;
