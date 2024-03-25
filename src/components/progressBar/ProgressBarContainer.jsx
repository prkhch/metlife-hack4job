import React from "react";
import * as S from "./styles";
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBarContainer = ({ cur, max }) => {
  return (
    <S.Wrapper>
      <S.BarValue>
        {cur} / {max}
      </S.BarValue>
      <ProgressBar
        completed={cur}
        maxCompleted={max}
        isLabelVisible={false}
        width="20rem"
        baseBgColor="#F2F2F2"
        bgColor="#0090DA"
      />
    </S.Wrapper>
  );
};

export default ProgressBarContainer;
