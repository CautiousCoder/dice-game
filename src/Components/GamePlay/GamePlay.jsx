import Button from '../Button/Button';
import styles from './GamePlay.module.css';
const GamePlay = ({ playGame }) => {
  return (
    <div className={styles.gamePlay}>
      <div className={styles.images}>
        <img src='./images/6.png' alt='front image' />
      </div>
      <div className={styles.text}>
        <h1>dice game</h1>
        <Button text='play game' handleClick={playGame} />
      </div>
    </div>
  );
};
export default GamePlay;
