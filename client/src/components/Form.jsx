import styled, { css } from "styled-components";

export const Form = styled.form`
  ${(porps) =>
    porps.centered &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.div`
  font-size: 20px;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
`;

export const Select = styled.select`
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
`;
