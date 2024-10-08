import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer';

// This component is a header that displays my name in a unique way. It is designed move to vertical position as the user scrolls down the page.

const StyledHeader = styled.div`
    position: fixed;
    background-color: rgba(173, 216, 230, );
    padding: 20px;
    display: flex;
    justify-content: ${props => props.shrink ? 'flex-start' : 'space-between'};
    align-items: center;
    top: 0;
    left: ${props => props.shrink ? '0' : 'auto'};
    z-index: 1000;
    width: ${props => props.shrink ? '70px' : '80%'};
    height: ${props => props.shrink ? '100vh' : '100px'};
    transition: background-color 0.5s ease;
    flex-direction: ${props => props.shrink ? 'column' : 'row'};
    opacity: ${props => props.shrink ? 1 : props.transparent ? 0.4 : 1};
    // border: solid 1px black;
`;

const StyledH1Top = styled.h1`
    opacity: ${props => 1 - props.scrollPosition};
    writing-mode: horizontal-tb;
    text-orientation: upright;
    transition: opacity 5s;
    
`;

const StyledH1Left = styled.h1`
    opacity: ${props => props.scrollPosition};
    writing-mode: ${props => props.windowWidth <= 600 || props.shrink ? 'vertical-rl' : 'horizontal-tb'};
    text-orientation: upright;
    
    @media (max-width: 600px) {
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
`;

const StyledLetter = styled.div`
    display: ${props => props.shrink ? 'block' : 'inline-block'};
    transform: ${props => props.shrink ? 'rotate(90deg)' : 'none'};
    margin: ${props => props.shrink ? '0 0 -2px 0' : '0 10px 0 0'};
    color: white;
    @media (max-width: 600px) {
        
        font-size: 1rem;
     
    }
    }
`;

const StyledNavDrawer = styled(NavDrawer)`
    position: fixed;
    top: 5%; 
    right: 1%;
    background-color: rgba(247, 233, 186, .6);
`;

export default function NameHeader() {
    const [transparent, setTransparent] = useState(false);
    const [shrink, setShrink] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const text = "Christopher .R.  Naro".split("").map((word, index) => (
        <StyledLetter shrink={shrink} key={index}>{word}</StyledLetter>
    ));

    const handleScroll = () => {
        const offset = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        if (offset > 50) {
            setTransparent(true);
            setShrink(true);
        } else {
            setTransparent(false);
            setShrink(false);
        }
        setScrollPosition(offset / maxScroll, 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <StyledHeader transparent={transparent} shrink={shrink}>
            {!shrink && (
                <StyledH1Top scrollPosition={scrollPosition}>{text}</StyledH1Top>
            )}
            {shrink && windowWidth > 600 && (
                <StyledH1Left scrollPosition={scrollPosition} windowWidth={windowWidth}>{text}</StyledH1Left>
            )}
            <StyledNavDrawer />
        </StyledHeader>
    );
}