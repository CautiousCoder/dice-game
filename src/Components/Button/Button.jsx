import styles from './Button.module.css';
const Button = ({ text, handleClick }) => {
  return (
    <button className={styles.button} type='button' onClick={() => handleClick()}>
      {text}
    </button>
  );
};
export default Button;
