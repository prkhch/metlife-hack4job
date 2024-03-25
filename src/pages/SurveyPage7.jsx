import React, { useState } from "react";
import ProgressBarContainer from "../components/progressBar/ProgressBarContainer";
import RadioGroup from "../components/radio7/RadioGroup";
import BottomSheet from "../components/bottomSheet/BottomSheet";

import * as S from "../components/surveyPage/styles";
import ArrowDown from "../components/bottomSheet/ArrowDown";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const SurveyPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const [categoryId, setCategoryId] = useState(1);

  const apiTest1 = () => {
    axios
      .get(`/api/category/${categoryId}`)
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
        [
          { optionId: 1, questionId: 1 },
          { optionId: 2, questionId: 1 },
        ],
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
    <S.Wrapper>
      {/* <button onClick={apiTest1}>api1 test</button>
      <button onClick={apiTest2}>api2 test</button> */}
      <ProgressBarContainer cur={7} max={10} />
      <S.Title>자녀가 있으신가요?</S.Title>
      <RadioGroup />

      {/* <S.SheetButton
        onClick={() => {
          setVisible(true);
        }}
      >
        <S.ButtonText>가족력이 있으신가요?</S.ButtonText>
        <ArrowDown />
      </S.SheetButton>
      {visible && <BottomSheet setVisible={setVisible} />} */}

      <S.ButtonWrapper>
        <S.Button onClick={() => navigate(-1)}>이전</S.Button>
        <S.Button onClick={() => navigate("/survey8")}>다음</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default SurveyPage;
