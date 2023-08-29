import { useState } from "react";
import styled from "styled-components";
import { Button, OutlineButton } from "../Styled/Button";
// eslint-disable-next-line react/prop-types
const DiceRoll = ({ currentDice, handleClick, resetScore }) => {
  const [showRule, setShowRule] = useState(false);
  return (
    <DiceRole>
      <div className="image" onClick={handleClick}>
        <img src={`./images/${currentDice}b.png`} alt="Dice image" />
      </div>
      <p>Click on Dice to roll</p>
      <div className="buttonStyle">
        <OutlineButton onClick={resetScore}>restore game</OutlineButton>
        <Button onClick={() => setShowRule((prev) => !prev)}>
          {showRule ? "hide" : "show"} rules
        </Button>
      </div>
      <div className={showRule === false ? "hide" : "show"}>
        <h2>How to play dice game</h2>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice.
        </p>
        <p>If you get wrong guess then 1 point will be deduced.</p>
      </div>
    </DiceRole>
  );
};
export default DiceRoll;

const DiceRole = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .image {
    img {
      width: 120px;
      height: 120px;
      border-radius: 8px;
      margin: 0;
    }
  }
  p {
    font-size: 16px;
    color: black;
    margin-top: 0;
    line-height: 1rem;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
    padding: 20px;
    background: wheat;
    border-radius: 12px;
    outline: 1px solid #4545;
    margin-top: 10px;
  }
  .buttonStyle {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
