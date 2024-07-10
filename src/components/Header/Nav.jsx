//TODO: import all that is needed to create my nav bar
//TODO: create a nav bar with links to my home, about, contact pages, portfolio, and resume

import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


const StyledNav = styled.nav``

export default function Nav() {
    return (
        <StyledNav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
        </StyledNav>
    )
}