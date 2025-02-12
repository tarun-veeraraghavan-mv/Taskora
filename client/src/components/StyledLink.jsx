import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  font-size: 15px;
  padding: 8px 14px;
  text-decoration: none;
  color: black;

  color: white;
  font-weight: 600;
  border-radius: 7px;

  ${(props) =>
    props.color == "blue" &&
    css`
      background-color: #38bdf8;
    `}

  ${(props) =>
    props.color == "green" &&
    css`
      background-color: #22c55e;
    `}
`;
