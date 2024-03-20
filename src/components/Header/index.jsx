import {memo } from "react";
import { HeaderContainer, Logo } from "./styles";


const Header = () => {
  return (
    <HeaderContainer>
      <Logo
        // img src="/proodfy.png" alt="" 
      />
    </HeaderContainer>
  );
};

export default memo(Header);
