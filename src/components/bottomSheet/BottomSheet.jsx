import React, { useState } from "react";
import * as S from "./styles";

const BottomSheet = ({ setVisible, setJob }) => {
  const data = {
    1: "공무원",
    2: "학생",
    3: "개발자",
    4: "기타",
    // 5: "심혈관",
    // 6: "당뇨병",
    // 7: "아토피",
  };

  return (
    <S.Background onClick={() => setVisible(false)}>
      <S.Ul>
        <S.Radius>선택</S.Radius>
        {Object.entries(data).map(([id, item]) => (
          <S.Li
            key={id}
            onClick={() => {
              // *** data setter
              setJob(item);
              setVisible(false);
            }}
          >
            {item}
          </S.Li>
        ))}
      </S.Ul>
    </S.Background>
  );
};

export default BottomSheet;
