import React from 'react';
import { Switch, Route } from "react-router-dom";
import RatesList from '../rates-list/RatesList';
import CreateRate from '../create-rate/CreateRate';
import styled from "styled-components";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;
`;

function Section() {
  return (
    <SectionStyled>
      <Switch>
        <Route exact path="/" component={RatesList} />
        <Route path="/create-rate" component={CreateRate} />
      </Switch>
    </SectionStyled>
  );
}

export default Section;
