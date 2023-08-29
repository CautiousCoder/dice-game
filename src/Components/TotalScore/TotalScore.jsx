/* eslint-disable react/prop-types */
import styled from "styled-components";
const TotalScore = ({
  error,
  setError,
  totalScore,
  selectedValue,
  setSelectedValue,
}) => {
  const number = [1, 2, 3, 4, 5, 6];
  const selectiveNumberHandler = (value) => {
    setSelectedValue(value);
    setError("");
  };
  return (
    <Score>
      <div className="countScore">
        <h1>{totalScore}</h1>
        <p>total score</p>
      </div>
      <div className="selectedNumber">
        <p className="Error">{error}</p>
        <div className="selectedButton">
          {number.map((value, i) => (
            <span
              className={value === selectedValue ? "Black" : "White"}
              key={i}
              onClick={() => selectiveNumberHandler(value)}
            >
              {value}
            </span>
          ))}
        </div>
        <div className="selectedText">select number</div>
      </div>
    </Score>
  );
};
export default TotalScore;

const Score = styled.div`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  .countScore {
    display: grid;
    place-items: center;
    margin-top: -20px;
  }
  .countScore {
    h1 {
      font-size: 90px;
      margin: 0px;
      color: black;
      background: white;
      font-weight: bolder;
    }
  }
  .countScore {
    p {
      margin: 0px;
      text-transform: capitalize;
      font-size: 16px;
      font-weight: 700;
      justify-content: end;
    }
  }
  .selectedNumber {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    gap: 10px;
  }
  .selectedButton {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .selectedButton {
    span {
      width: 72px;
      height: 72px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      outline: 2px solid black;
      cursor: pointer;
    }
  }
  .Black {
    background: #000;
    color: white;
  }
  .selectedText {
    float: right;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;
