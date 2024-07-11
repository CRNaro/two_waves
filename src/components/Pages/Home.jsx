import styled from '@emotion/styled';
import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import backgroundImage from '../../assets/images/trees.jpeg';
import imageOfMe from '../../assets/images/medrawingstyle.png';
import NavCard from '../Header/NavCard';
import NavDrawer from '../Header/NavDrawer'

const StyledCard = styled(Card)`
    background-color: rgba(247, 233, 186, 1);
    width: 50vw;
    height: 100vh;
    margin-left: 40px;
    margin-top: 300px; 
    margin-bottom: 20px;  
    box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
    position: relative;
    z-index: 2;
    left: 80px;
  `;
const MainContent = styled.div`
    padding-top: 10%;
`;
const CardContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const StyledCardRight = styled(Card)`
background-color: rgba(173, 216, 230, 0.1);
width: 75vw;
height: 40vh;

margin-top: -30px; 
margin-bottom: 20px; 
box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
`
const StyledImage = styled.img`
    width: 75vw;
    height: 125vh;
    margin-top: 25px;
    margin-left: 0px;
    margin-right: -40px;
    box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
    position: relative;
    `
const StyledTypography = styled(Typography)`
    position: absolute;
    left: 18%;
    top: 40%;
    z-index: 3;
    font-size: 1.5rem;
`
const StyledCardBehind = styled(Card)`
position: absolute;
background-color: #231F20;
margin-left: 60px;
width: 50vw;
height: 400vh;
z-index: 0;
box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
`
const StyledNavDrawer = styled(NavDrawer)`

margin-left: 80%;
`



export default function Home() {
    return (
        <MainContent>
             <StyledNavDrawer />
               <StyledTypography>
                Full Stack Developer <br></br>
                Let's make beautiful <br></br>
                websites together
               </StyledTypography>
            <CardContainer>
        <StyledCard>
        <CardContent>
   
            <Typography variant="h5" component="div">
            <NavCard />
            </Typography>
        </CardContent>
    </StyledCard>
    <StyledCardBehind>
    </StyledCardBehind>
            <StyledImage src={imageOfMe} alt="drawing of me"/>
    
        </CardContainer>
    </MainContent>
    );   
}

{/* <StyledCardRight>
<CardContent style={{ padding: 0 }}>
    <img src={imageOfMe} alt="drawing of me" style={{width: "100%", height: "100%"}}/>
</CardContent>
</StyledCardRight> */}