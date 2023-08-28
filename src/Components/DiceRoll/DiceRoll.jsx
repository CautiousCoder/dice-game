import { useState } from 'react';
import Button from '../Button/Button';
import styles from './DiceRole.module.css';
const DiceRoll = ({ currentDice, handleClick, resetScore }) => {
  const [showRule, setShowRule] = useState(false);
  return (
    <div className={styles.Dice}>
      <div className='image' onClick={handleClick}>
        <img src={`./images/${currentDice}b.png`} alt='Dice image' />
      </div>
      <p>Click on Dice to roll</p>
      <Button text='reset score' handleClick={resetScore} />
      <Button
        text={showRule === false ? 'show rules' : 'hide rules'}
        handleClick={() => setShowRule((prev) => !prev)}
      />
      <div className={showRule === false ? styles.hide : styles.show}>
        <h2>How to play dice game</h2>
        <p>Select any number.</p>
        <p>Click on dice image.</p>
        {resetScore}
        <p>
          After click on dice if selected number is equal to dice number you will get same point as
          dice.
        </p>
        <p>If you get wrong guess then 1 point will be deduced.</p>
      </div>
    </div>
  );
};
export default DiceRoll;
