import React from "react";
import Lottie from "react-lottie";
import loadingLottie from "../assets/Robot.json";
import Button from "../components/resultPage/Button";

import * as S from "../components/resultPage/styles";

const ResultPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.Wrapper>
      <S.Text>
        당신이 20대 남성이라면, 암보험 외에도 미니재해보험을 고려해보는 것도
        좋은 선택일 수 있어요!
      </S.Text>
      <Lottie options={defaultOptions} height={200} width={200} />
      <Button />
    </S.Wrapper>
  );
};

export default ResultPage;
