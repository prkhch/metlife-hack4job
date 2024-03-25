import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StartImage = styled.img`
  display: flex;
  margin: 0 auto;
  // height:
  // height: 50px;
  width: 300px;
  margin-bottom: 240px;
`;

export const StartTextLine = styled.div`
  margin: 0 auto;
  height: 50px;
  width: 300px;
  font-family: "main";
  font-weight: 600;
  font-size: 1.2rem;
`;

export const StartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  color: white;
  height: 50px;
  width: 300px;
  background: #0090da;
  cursor: pointer;
  font-family: "main";

  &:hover {
    background-color: #007abc;
  }
`;
