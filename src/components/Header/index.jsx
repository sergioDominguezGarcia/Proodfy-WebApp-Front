import {memo } from "react";
import { HeaderContainer, Logo } from "./styles";


const Header = () => {
  return (
    <HeaderContainer>
      <Logo>PROODFY</Logo>
    </HeaderContainer>
  );
};

export default memo(Header);
