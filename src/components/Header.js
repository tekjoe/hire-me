import React from "react";
import styled from "styled-components";
import bgHeaderMobile from "../images/bg-header-mobile.svg";
import bgHeaderDesktop from "../images/bg-header-desktop.svg";

const Header = styled.header`
  background: ${() => `hsl(180, 15%, 52%) url(${bgHeaderMobile})`};
  background-repeat: no-repeat;
  background-size: 100%;
  height: 8rem;
  @media (min-width: 768px) {
    background: ${() => `hsl(180, 15%, 52%) url(${bgHeaderDesktop})`};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 10rem;
  }
`;

Header.Image = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  height: 8rem;
`;

export default () => {
  return <Header></Header>;
};
