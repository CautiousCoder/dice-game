import { useState } from 'react';
import './App.css';
import PlayingGame from './Components/PlayingGame/PlayingGame';
import GamePlay from './Components/GamePlay/GamePlay';

function App() {
  const [isStartPlay, setIsStartPlay] = useState(false);
  const handleClick = () => {
    setIsStartPlay(true);
  };
  return <>{isStartPlay ? <PlayingGame /> : <GamePlay playGame={handleClick} />}</>;
}

export default App;
