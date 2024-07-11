import styled from '@emotion/styled';
import React from "react";
import { useState, useEffect } from 'react'
import Card from "@mui/material/Card";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



//color scheme Tiki style:  Linen = #EFE6DD, Vanilla = #F3DFA2, Verdigris = #7EBDC2, 
//                          Persian Red = #BB4430, Raisin Black = #231F20 
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
    width: ${props => props.shrink ? '70px' : '50%'};
    height: ${props => props.shrink ? '100vh' : '100px'};
    transition: background-color 0.5s ease;
    flex-direction: ${props => props.shrink ? 'column' : 'row'};
    opacity: ${props => props.shrink ? 1 : props.transparent ? 0.4 : 1};
  `;
  //
// const StyledH1 = styled.h1`
//     opacity:  ${props => props.shrink ? (1 - props.scrollPosition) : (1 - props.scrollPosition)};
//     transition: opacity 10s ease;
//     writing-mode: ${props => props.shrink ? 'vertical-rl' : 'horizontal-tb'};
//     text-orientation: upright;
//     `;
const StyledH1Top = styled.h1`
    opacity: ${props => 1 - props.scrollPosition};
    writing-mode: horizontal-tb;
    text-orientation: upright;
    transition: opacity 5s;
`;

const StyledH1Left = styled.h1`
    opacity: ${props =>  props.scrollPosition};
    writing-mode: ${props => props.shrink ? 'vertical-rl' : 'horizontal-tb'};
    text-orientation: upright;
`;

const StyledLetter = styled.div`
display:  ${props => props.shrink ? 'block' : 'inline-block'};
transform: ${props => props.shrink ? 'rotate(90deg)' : 'none'};
margin: ${props => props.shrink ? '0 0 -2px 0' : '0 10px 0 0'};
    `

export default function NameHeader() {
    const [transparent, setTransparent] = useState(false);
    const [shrink, setShrink] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const text = "Christopher  R.  Naro".split("").map((word, index) => (
        <StyledLetter shrink={shrink} key={index}>{word}</StyledLetter>
    ));

    const handleScroll = () => {
        const offset = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        if (offset > 50){
            setTransparent(true);
            setShrink(true);
        }else{
            setTransparent(false);
            setShrink(false);
        }
        setScrollPosition(offset / maxScroll, 1);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        
        <StyledHeader transparent={transparent} shrink={shrink}>
        
            {/* <StyledH1 scrollPosition={scrollPosition} transparent={transparent}>{text}</StyledH1> */}
            {shrink ? (
    <StyledH1Left scrollPosition={scrollPosition}>{text}</StyledH1Left>
) : (
    <StyledH1Top scrollPosition={scrollPosition}>{text}</StyledH1Top>
)}
  
        </StyledHeader>
        
    )
}