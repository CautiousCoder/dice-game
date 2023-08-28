import styles from './PlayingGame.module.css';
import DiceRoll from '../DiceRoll/DiceRoll';
import TotalScore from '../TotalScore/TotalScore';
import { useState } from 'react';
const PlayingGame = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');

  const randomNumberGenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleClick = () => {
    if (!selectedValue) {
      setError('You have not selected any number.');
      return;
    }
    let randomNumber = randomNumberGenerate(1, 7);
    setCurrentDice(randomNumber);
    selectedValue === randomNumber
      ? setTotalScore((prev) => prev + randomNumber)
      : setTotalScore((prev) => prev - 1);
    setSelectedValue(undefined);
  };

  const resetScore = () => {
    setTotalScore(0);
    setCurrentDice(1);
    setSelectedValue(1);
    setError('');
  };
  return (
    <div className={styles.Playing}>
      <TotalScore
        error={error}
        setError={setError}
        totalScore={totalScore}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <DiceRoll handleClick={handleClick} currentDice={currentDice} resetScore={resetScore} />
    </div>
  );
};
export default PlayingGame;
