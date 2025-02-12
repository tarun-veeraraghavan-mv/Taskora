import styled, { css } from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}
`;
