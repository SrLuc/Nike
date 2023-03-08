import styled from "styled-components";

export const StyledArticle = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;

export const StyledSectionOne = styled.section`
  width: 50%;
  text-align: left;
  padding: 15px;

  h1 {
    font-style: italic;
    font-weight: 900;
    font-size: 50px;
  }

  h3 {
    font-style: italic;
    font-weight: 500;
    line-height: 80px;
    letter-spacing: 0.15em;
  }

  h5 {
    font-style: italic;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0.15em;
    font-size: 35px;
  }

  p {
    font-style: italic;
    font-weight: 500;
    line-height: 203%;
    letter-spacing: 0.05em;
    padding-top: 20px;

  }

  button {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5;
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    border: 0;
    padding: 1rem;
    border-radius: 70px;
    margin: 20px 0;
    background-color: gray;
  }

  button:before {
    background-color: #f22;
    content: "";
    display: inline-block;
    height: 1px;
    margin-right: 10px;
    transition: all 0.42s cubic-bezier(0.25, 0.8, 0.25, 1);
    width: 0;
  }

  button:hover:before {
    background-color: #f22;
    width: 3rem;
    height: 5px;
  }
`;

export const StyledSectionTwo = styled.section`
  width: 50%;
  text-align: right;
  padding: 15px;

  border: 1px solid blue;
`;
