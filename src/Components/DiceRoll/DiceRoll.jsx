import styles from './DiceRole.module.css';
const DiceRoll = ({ currentDice, handleClick }) => {
  console.log(currentDice);
  return (
    <div className={styles.Dice}>
      <div className='image' onClick={handleClick}>
        <img src={`/images/${currentDice}b.png`} alt='Dice image' />
      </div>
      <p>Click on Dice to roll</p>
      <button>reset score</button>
      <button>show rules</button>
    </div>
  );
};
export default DiceRoll;
