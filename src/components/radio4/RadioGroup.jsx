import React, { useEffect, useState } from "react";
import Radio from "./Radio";
import * as S from "./styles";

const RadioGroup = () => {
  const [current, setCurrent] = useState(1);
  // const [content, setContent] = useState("선택 사항");

  return (
    <S.RadioGroup>
      <Radio
        content={"남자"}
        optionOrder={1}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"여자"}
        optionOrder={2}
        current={current}
        setCurrent={setCurrent}
      />
    </S.RadioGroup>
  );
};

export default RadioGroup;
