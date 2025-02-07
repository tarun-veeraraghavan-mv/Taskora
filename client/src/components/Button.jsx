import styled, { css } from "styled-components";

export const TextButton = styled.button`
  font-size: 14px;
  padding: 10px;
  border: none;
  font-weight: bold;
  color: white;
  border-radius: 7px;

  ${(props) =>
    props.color === "green" &&
    css`
      background-color: #4ade80;
    `}

  ${(props) =>
    props.color === "red" &&
    css`
      background-color: #f87171;
    `}

    ${(props) =>
    props.color === "blue" &&
    css`
      background-color: #38bdf8;
    `}
  cursor: pointer;
`;
