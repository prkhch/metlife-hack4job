import React, { useEffect, useState } from "react";
import Radio from "./Radio";
import * as S from "./styles";

const RadioGroup = () => {
  const [current, setCurrent] = useState(1);
  // const [content, setContent] = useState("선택 사항");

  return (
    <S.RadioGroup>
      <Radio
        content={"100만원~200만원"}
        optionOrder={1}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"200만원~300만원"}
        optionOrder={2}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"300만원~400만원"}
        optionOrder={3}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"400만원~500만원"}
        optionOrder={4}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"500만원 이상"}
        optionOrder={4}
        current={current}
        setCurrent={setCurrent}
      />
    </S.RadioGroup>
  );
};

export default RadioGroup;
