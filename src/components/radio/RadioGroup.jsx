import React, { useEffect, useState } from "react";
import Radio from "./Radio";
import * as S from "./styles";

const RadioGroup = () => {
  const [current, setCurrent] = useState(1);
  // const [content, setContent] = useState("선택 사항");

  return (
    <S.RadioGroup>
      <Radio
        content={"노후"}
        optionOrder={1}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"건강"}
        optionOrder={2}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"금융"}
        optionOrder={3}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"여행"}
        optionOrder={4}
        current={current}
        setCurrent={setCurrent}
      />
    </S.RadioGroup>
  );
};

export default RadioGroup;
