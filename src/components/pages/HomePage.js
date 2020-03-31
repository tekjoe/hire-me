import React from "react";
import styled from "styled-components";
import CardList from "../CardList";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const HomePage = styled.section`
  margin: 4rem 2rem;
`;

export default () => {
  return (
    <Container>
      <HomePage>
        <CardList />
      </HomePage>
    </Container>
  );
};
