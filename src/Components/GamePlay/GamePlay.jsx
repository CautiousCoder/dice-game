import styled from "styled-components";
import { Button } from "../Styled/Button";
// eslint-disable-next-line react/prop-types
const GamePlay = ({ handleClick }) => {
  return (
    <Container>
      <div className="images">
        <img src="./images/dice1.jpg" alt="front image" />
      </div>
      <div className="text">
        <h1>dice game</h1>
        <Button onClick={handleClick}>play game </Button>
      </div>
    </Container>
  );
};
export default GamePlay;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  .images {
    img {
      width: 300px;
      height: 300px;
      margin: 0 20px;
    }
  }
  .text {
    gap: 15px;
    h1 {
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;
