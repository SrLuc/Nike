import styled from "styled-components";

export const StyledMain = styled.main`


  .parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    height: 100vh;
    width: 100%;

    padding: 10px;
  }

  //sidebar
  .div1 {
    border: 1px solid red;
    grid-area: 1 / 1 / 6 / 2;

  }

  //header
  .div2 {
    border: 1px solid blue;
    grid-area: 1 / 2 / 2 / 6;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  //article
  .div3 {
    border: 1px solid green;
    grid-area: 2 / 2 / 6 / 6;
  }
`;
