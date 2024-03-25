import React from "react";
import * as S from "../components/StartPage/style";
import { useNavigate } from "react-router-dom";

// start page with one start button and one cute image
const StartPage = () => {
  const navigator = useNavigate();
  const onClick = () => {
    navigator("/kategorie");
  };
  // 가장 위의 div로 가운데 정렬설정
  return (
    <>
      <S.PageWrapper>
        <S.StartImage src="HACK4JOIN.png" />
        <S.StartTextLine>메트라이프와 함께</S.StartTextLine>
        <S.StartTextLine>나와 잘 맞는 보험을 찾아 볼까요?</S.StartTextLine>
        <S.StartButton onClick={onClick}>시작하기</S.StartButton>
      </S.PageWrapper>
    </>
  );
};

export default StartPage;
