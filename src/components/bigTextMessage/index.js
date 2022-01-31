import React from "react";
import * as S from "./styled";

const BigTextMessage = (props) => {
  return (
    <S.BigTextMessageStyle>
      <h1>{props.message}</h1>
    </S.BigTextMessageStyle>
  );
};

export default BigTextMessage;
