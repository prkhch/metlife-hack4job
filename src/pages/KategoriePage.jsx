import React from "react";
import * as S from "../components/kategoriePage/style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KategoriePage = () => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("click");
  };

  const s = "노후보험";
  const apiTest1 = ({ categoryId }) => {
    axios
      .get(
        `https://dev-ai-serving.azurewebsites.net/gpt/1/1/1/%EA%B5%90%ED%86%B5%EB%B3%B4%ED%97%98}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const apiTest2 = () => {
    axios
      .post(
        `/api/recommend`,
        { prodCat: 1, age: 1, sex: 1, prod: "교통" },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <S.PageWrapper>
        <S.KategorieTextContainer>
          관심있는 분야를 선택해주세요.
        </S.KategorieTextContainer>
        <S.KategorieContainer>
          <S.KategorieCard onClick={() => navigate("/survey")}>
            <S.KategorieImageContainer>
              <S.KategorieImage src="heart_front_color.svg" />
            </S.KategorieImageContainer>
            <S.KategorieText>노후</S.KategorieText>
          </S.KategorieCard>
          <S.KategorieCard onClick={() => apiTest1(2)}>
            <S.KategorieImageContainer>
              <S.KategorieImage src="gym-front-color.svg" />
            </S.KategorieImageContainer>
            <S.KategorieText>건강</S.KategorieText>
          </S.KategorieCard>
        </S.KategorieContainer>
        <S.KategorieContainer>
          <S.KategorieCard onClick={() => navigate("/survey")}>
            <S.KategorieImageContainer>
              <S.KategorieImage src="dollar-front-color.svg" />
            </S.KategorieImageContainer>
            <S.KategorieText>금융</S.KategorieText>
          </S.KategorieCard>
          <S.KategorieCard onClick={() => navigate("/survey")}>
            <S.KategorieImageContainer>
              <S.KategorieImage src="rocket-front-color.svg" />
            </S.KategorieImageContainer>
            <S.KategorieText>교통</S.KategorieText>
          </S.KategorieCard>
        </S.KategorieContainer>
      </S.PageWrapper>
    </>
  );
};

export default KategoriePage;
