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
import '../../styles/AboutMe.css'


const StyledCard = styled(Card)`
    background-color: rgba(247, 233, 186, 1);
    width: 50vw;
    height: auto;
    margin-left: 40px;
    margin-top: 200px; 
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
    left: 13%;
    top: 40%;
    z-index: 3;
    font-size: 1.5rem;
    color: white;
`
const StyledCardBehind = styled(Card)`
position: absolute;
background-color: #231F20;
margin-left: 60px;
width: 60%;
height: 200vh;
z-index: 0;
box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
`
const StyledCardContent = styled(CardContent)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
overflow: auto;
`
const ParagraphStyledTypography = styled(Typography)`
position: absolute;
left: 13%;
top: 40%;
z-index: 3;
font-size: 1.5rem;
color: white;
`
const ImgCard = styled(Card)`
    background-image: url(${backgroundImage});
    z-index: 3;
    width: 100%;
    height:25%;

    `


export default function About() {
    return (
        <MainContent>
 
            <CardContainer>
           
        <StyledCard>
       
        <StyledCardContent>
       
      <div className="about-me-text">
      <Typography paragraph>
Welcome to my professional webpage, and thank you for taking the time to visit. Your interest in getting to know me and my work means a great deal. Whether you’re a colleague, a potential collaborator, or simply curious about my journey, I am honored by your presence.
        </Typography>
        <Typography paragraph>
With over a decade of leadership experience in the craft beer industry, I am now poised to apply my skills and passion to the dynamic world of web development. My journey began with hands-on brewing at Throwback Brewery, where I learned the importance of meticulous attention to detail, effective communication, and the art of crafting exceptional experiences for customers.
        </Typography>
        <Typography paragraph>
Transitioning from brewing to tech, I recently completed the Full Stack Web Development Boot Camp at UNH, immersing myself in cutting-edge technologies like React, Node.js, and RESTful APIs. My background in team leadership and project management from my time as Head Brewer at both Throwback Brewery and SoMe Brewing Company has prepared me well for the collaborative environment of software development.
        </Typography>
        <Typography paragraph>
My technical toolkit now includes proficiency in front-end development with React, JavaScript, HTML, and CSS, as well as back-end skills with Node.js, Express.js, and building databases via MySQL and MongoDB. I am excited to leverage these skills to create responsive, user-friendly websites that not only meet client needs but exceed their expectations.
        </Typography>
        <Typography paragraph>
Entering the web development realm, my passion for learning drives me forward. I am captivated by the fusion of design, technology, and user experience, constantly seeking new challenges and innovations. Every project is an opportunity to expand my skills and deepen my understanding. Collaborating with forward-thinking professionals, I am committed to continuous growth and pushing the boundaries of what’s possible.
        </Typography>
        <Typography paragraph>
With a strong foundation in project management, customer service, and problem-solving, I am eager to contribute to a forward-thinking team where I can continue to expand my skills and make a meaningful impact in the world of web development.
        </Typography>
        <Typography paragraph>
As you navigate through these pages, I hope you’ll gain insight into who I am as a professional and as an individual. Whether you’re seeking collaboration opportunities, exploring potential partnerships, or simply looking to connect, I am excited about the possibility of us crossing paths and creating meaningful connections.
        </Typography>
        <Typography paragraph>
Thank you once again for stopping by. Your visit is appreciated more than words can express. Please feel free to reach out if you have any questions or if there’s anything I can assist you with.
        </Typography>
        <Typography paragraph>
Warm regards,
        </Typography>
        <Typography paragraph>
Christopher R. Naro
        </Typography>
        </div>
     
        </StyledCardContent>
        
    </StyledCard>
    <StyledCardBehind>
    <ImgCard>
    </ImgCard>
    </StyledCardBehind>
       
   
        </CardContainer>
        
    </MainContent>
    );   
}
