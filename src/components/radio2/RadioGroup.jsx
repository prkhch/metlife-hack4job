import React, { useEffect, useState } from "react";
import Radio from "./Radio";
import * as S from "./styles";

const RadioGroup = () => {
  const [current, setCurrent] = useState(1);
  // const [content, setContent] = useState("선택 사항");

  return (
    <S.RadioGroup>
      <Radio
        content={"20대"}
        optionOrder={1}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"30대"}
        optionOrder={2}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"40대"}
        optionOrder={3}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"50대"}
        optionOrder={4}
        current={current}
        setCurrent={setCurrent}
      />
      <Radio
        content={"60대 이상"}
        optionOrder={4}
        current={current}
        setCurrent={setCurrent}
      />
    </S.RadioGroup>
  );
};

export default RadioGroup;
