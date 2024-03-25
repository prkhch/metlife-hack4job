import styled from "@emotion/styled";

export const Text = styled.div`
  font-family: "main";
  font-weight: 600;
  font-size: 1.2rem;
  margin: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  text-align: center;
  cursor: pointer;
  font-family: "main";
  margin-top: 5rem;
  background: #0090da;
  border-radius: 16px;
  padding: 1rem;
  width: 80%;
  color: white;
  &:hover {
    background: #007abc;
  }
  font-size: 1.5rem;
`;
