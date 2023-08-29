import styled from "styled-components";
import DiceRoll from "../DiceRoll/DiceRoll";
import TotalScore from "../TotalScore/TotalScore";
import { useState } from "react";
const PlayingGame = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(1);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const randomNumberGenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const handleClick = () => {
    if (!selectedValue) {
      setError("You have not selected any number.");
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
    setError("");
  };
  return (
    <PlayGame>
      <TotalScore
        error={error}
        setError={setError}
        totalScore={totalScore}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <DiceRoll
        handleClick={handleClick}
        currentDice={currentDice}
        resetScore={resetScore}
      />
    </PlayGame>
  );
};
export default PlayingGame;

const PlayGame = styled.div`
  padding-top: 20px;
  display: flex;
  width: 83.33%;
  margin: 0 auto;
  flex-direction: column;
  gap: 40px;
`;
