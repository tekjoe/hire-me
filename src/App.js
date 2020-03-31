import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  body {
    font-family: 'Spartan', sans-serif;
    font-size: 15px;
    background: hsl(180, 52%, 96%);
    color: hsl(180, 14%, 20%);
  }
`;

export default () => {
  return (
    <>
      <Header />
      <HomePage />
      <GlobalStyle />
    </>
  );
};
