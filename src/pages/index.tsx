import React from "react";
import * as S from "./style";

//Header Button Component
import Button from "../components/HeaderComponents";

//Article section Component
import Article from "../components/ArticleComponents";

//Sidebar section Component
import Sidebar from "../components/SidebarComponents";

type Props = {};

const MainPage = (props: Props) => {
  return (
    <S.StyledMain>
      <div className="parent">

        <div className="div1">
          <Sidebar />
        </div>

        <div className="div2">
          <Button>Home</Button>
          <Button>Collection</Button>
          <Button>About</Button>
          <Button>Contact</Button>
        </div>

        <div className="div3">
          <Article />
        </div>
      </div>
      
    </S.StyledMain>
  );
};

export default MainPage;
