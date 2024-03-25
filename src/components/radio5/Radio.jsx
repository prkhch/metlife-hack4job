import React, { useEffect, useState } from "react";
import * as S from "./styles";

const Radio = ({ content, optionOrder, current, setCurrent }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (optionOrder === current) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [current, optionOrder, isSelected]);

  return (
    <S.Radio isSelected={isSelected} onClick={() => setCurrent(optionOrder)}>
      {content}
    </S.Radio>
  );
};

export default Radio;
