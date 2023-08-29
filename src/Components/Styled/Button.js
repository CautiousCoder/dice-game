import styled from 'styled-components'

export const Button = styled.button `
    width: 220px;
    padding: 10px;
    text-align: center;
    background: #000;
    color: white;
    border-radius: 8px;
    text-transform: capitalize;
    outline: 1px solid transparent;
    transition-duration: 600ms;
  &:hover {
    background: white;
    color: #000;
    outline: 1px solid black;
  }
`;
export const OutlineButton = styled(Button)`
    background: white;
    background: white;
    color: #000;
    outline: 1px solid black;
    &:hover {
    background: black;
    color: white;
    outline: 1px solid transparent;
  }
`;