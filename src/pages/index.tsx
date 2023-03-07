import React from "react";
import * as S from "./style";

//Elements
import Button from "../components/HeaderComponents";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <S.StyledMain>
      <div className="parent">
        <div className="div1">sidebar</div>

        <div className="div2">
          <Button text="ola" />
          <Button text="ola" />
          <Button text="ola" />
          <Button text="ola" />
        </div>

        <div className="div3">article</div>
      </div>
    </S.StyledMain>
  );
};

export default MainPage;
