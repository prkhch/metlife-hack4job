import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  height: 100%;
  // width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #f2f2f2;
`;

export const KategorieTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100px;
  border-radius: 20px;
  margin-bottom: 40px;
  font-family: "main";
  font-weight: 600;
  font-size: 1.2rem;
`;

export const KategorieContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: calc(100% - 20px);
  display: flex;
  font-family: "main";
`;

export const KategorieCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: white;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  height: 200px;
  width: calc(50% - 20px);
  margin: 10px;
  font-family: "main";
  box-shadow: 2px 2px 4px #d9d9d6;
`;

export const KategorieImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

export const KategorieImage = styled.img`
  display: flex;
  margin: 0 auto;
  height: 100px;
  width: 100px;
`;

export const KategorieText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1.2rem;
`;
