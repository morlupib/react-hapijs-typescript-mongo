import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #0069fb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 68px;
  padding: 0 60px;
`;

const Img = styled.img`
  max-height: 54px;
  height: auto;
`;

const Nav = styled.nav`
  a {
    color: white;
    font-weight: 400;
    font-size: 16px;
    margin-right: 30px;
  }
  a:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  a:last-child {
    margin-right: 0;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <Img src={process.env.PUBLIC_URL + '/settle-logo.png'} alt="settle"/>
      <Nav>
        <Link to="/">Rates List</Link>
        <Link to="/create-rate">Create Rate</Link>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
