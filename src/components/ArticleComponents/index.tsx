import React from "react";
import * as S from "./styles";

interface ArticleProps {}

const Article = ({}: ArticleProps) => {
  return (
    <S.StyledArticle>
      <S.StyledSectionOne>
        <h1>AIR MAX</h1>
        <h3>NIKE AIR MAX 90</h3>
        <h5>$ 100</h5>
        <p>
          Nike Air Max is a line of shoes produced by Nike, Inc., with the first
          model released in 1987. Air Max shoes are identified by their midsoles
          incorporating flexible urethane pouches filled with pressurized gas,
          visible from the exterior of the shoe and intended to provide
          cushioning to the underfoot
        </p>
        <button>Add to Cart</button>
      </S.StyledSectionOne>
      <S.StyledSectionTwo>mundo</S.StyledSectionTwo>
    </S.StyledArticle>
  );
};

export default Article;
