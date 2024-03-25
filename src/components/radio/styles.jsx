import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 16px;
  background: #efefef;
  width: 80%;

  font-family: "main";
`;

export const Radio = styled.div`
  padding: 1rem;
  cursor: pointer;
  border-radius: 16px;
  ${(props) =>
    props.isSelected &&
    css`
      background: #0090da;
      color: white;
    `}

  &:hover {
    background: #007abc;
    color: white;
  }

  font-family: "main";
`;
