import styles from './TotalScore.module.css';
const TotalScore = ({ error, setError, totalScore, selectedValue, setSelectedValue }) => {
  const number = [1, 2, 3, 4, 5, 6];
  const selectiveNumberHandler = (value) => {
    setSelectedValue(value);
    setError('');
  };
  return (
    <div className={styles.Selected}>
      <div className={styles.countScore}>
        <h1>{totalScore}</h1>
        <p>total score</p>
      </div>
      <div className={styles.selectedNumber}>
        <p className={styles.Error}>{error}</p>
        <div className={styles.selectedButton}>
          {number.map((value, i) => (
            <span
              className={value === selectedValue ? styles.Black : 'White'}
              key={i}
              onClick={() => selectiveNumberHandler(value)}
            >
              {value}
            </span>
          ))}
        </div>
        <div className={styles.selectedText}>select number</div>
      </div>
    </div>
  );
};
export default TotalScore;
