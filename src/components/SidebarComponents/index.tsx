import React from "react";
import * as S from "./styles";

//icon
import { SiNike } from 'react-icons/si'

interface SidebarProps { }

const Sidebar = ({ }: SidebarProps) => {
  return <S.StyledSideBar>
    <i><SiNike size={50}></SiNike></i>
    <p>STYLE</p>
    <p>TAKE</p>
    <p>OVER</p>
  </S.StyledSideBar>;
};

export default Sidebar;
