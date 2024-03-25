import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.div`
  font-weight: 600;
  font-family: "main";
`;

export const Button = styled.div`
  cursor: pointer;
  background: #0090da;
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 16px;
  width: 10rem;
  text-align: center;
  &:hover {
    background: #007abc;
  }
  font-family: "main";
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SheetButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid #f2f2f2;

  &:hover {
    color: #6e6e6e;
  }
`;

export const ButtonText = styled.div`
  font-family: "main";
`;
