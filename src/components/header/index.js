import React from "react";

import {Container, Logo, ImageLogo, HeaderText } from "./style";

const Header = () => {
  return (
    <Container>
      <Logo>
        <ImageLogo resizeMode="contain" source={require("./zeroLogo.png")} />
      </Logo>
        <HeaderText>Zero App</HeaderText>
    </Container>
  );
};

export default Header;
