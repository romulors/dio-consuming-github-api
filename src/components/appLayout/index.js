import React from "react";
import SearchComponent from "../searchComponent";
import * as S from "./styled";

const AppLayout = ({ children }) => {
  return (
    <S.AppLayoutStyle>
      <SearchComponent />
      {children}
    </S.AppLayoutStyle>
  );
};

export default AppLayout;
