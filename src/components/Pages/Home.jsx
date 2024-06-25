import styled from '@emotion/styled';
import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const StyledCard = styled(Card)`
    background-color: rgba(173, 216, 230, 0.1);
    width: 50vw;
    height: 200vh;
    float: left;
    margin: 40px;   
  `;
const MainContent = styled.div`
    padding-top: 10%;
`;

export default function Home() {
    return (
        <MainContent>
        <StyledCard>
        <CardContent>
            <Typography variant="h5" component="div">
            Dear Visitor,
<br/>
Welcome, and thank you for taking the time to visit my professional webpage. 
I am genuinely grateful for your interest in getting to know me and exploring 
my work. 
<br/>
In a world filled with endless options, the fact that you've chosen to spend 
your valuable time here means a great deal to me. Whether you're a colleague, 
a potential collaborator, or simply curious about what I have to offer, I am 
honored by your presence.
<br/>
This webpage is not just a collection of information about my career and
accomplishments; it's a reflection of my passion, dedication, and commitment 
to growing and learning in all facets of my life. This is a platform where I strive 
to showcase my skills, experiences, and the projects that I'm truly proud of.
As you navigate through these pages, I hope you'll gain insight into who I am 
as a professional and as an individual. Whether you're seeking collaboration 
opportunities, exploring potential partnerships, or simply looking to connect, 
I'm excited about the possibility of us crossing paths and creating meaningful 
connections.
<br/>
Once again, thank you for stopping by. Your visit is appreciated more than words 
can express. Please feel free to reach out if you have any questions or if 
there's anything I can assist you with.
<br/>
Warm regards,
<br/>
Christohper R Naro
            </Typography>
        </CardContent>
    </StyledCard>
    </MainContent>
    );   
}