
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


const StyledNav = styled.nav`

    right: 0;
    top: -10;
    display: flex;
    justify-content: flex-end;
    z-index: 3;
`
const StyledLink = styled(Link)`
    margin:  25px 0 0 10px;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    &:hover {
        color: #7EBDC2;
    }
`

export default function NavCard() {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/resume">Resume</StyledLink>
        </StyledNav>
    )
}