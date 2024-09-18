import styled from '@emotion/styled';
import React from "react";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, TextField, Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import backgroundImage from '../../assets/images/trees.jpeg';
import imageOfMe from '../../assets/images/medrawingstyle.png';
import NavCard from '../Header/NavCard';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';



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
    text-align: left;
    left: 13%;
    top: 40%;
    z-index: 3;
    font-size: 1.5rem;
    color: white;
`
const StyledCardBehind = styled(Card)`
position: absolute;
background-color: #231F20;
margin-left: 40%;
width: 50vw;
height: 200vh;
z-index: 0;
box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
`
const ImgCard = styled(Card)`
    background-image: url(${backgroundImage});
    z-index: 3;
    width: 100%;
    height:25%;

    `

// function ContactForm() {
//     const [state, handleSubmit] = useForm("mqkrlavd");
//     const [nameTouched, setNameTouched] = useState(false);
//     const [emailTouched, setEmailTouched] = useState(false);
//     const [messageTouched, setMessageTouched] = useState(false);
  
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
  
//     if (state.succeeded) {
//         return <p>Thank you for contacting me.  I will respond as soon as possible.</p>;
//     }

// }

export default function Contact() {
    const [state, handleSubmit] = useForm("mqkrlavd");
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    if (state.succeeded) {
        return <p>Thank you for contacting me.  I will respond as soon as possible.</p>;
    }


    return (
        <MainContent>
    
               <StyledTypography>
               
               </StyledTypography>
            <CardContainer>
        <StyledCard>
     
        <Typography variant="h4">Please Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          error={nameTouched && name === ""}
          helperText={nameTouched && name === "" ? "Field required" : ""}
          onChange={e => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          error={emailTouched && email === ""}
          helperText={emailTouched && email === "" ? "Field required" : ""}
          onChange={e => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          error={messageTouched && message === ""}
          helperText={messageTouched && message === "" ? "Field required" : ""}
          onChange={e => setMessage(e.target.value)}
          onBlur={() => setMessageTouched(true)}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <Button type="submit" variant="contained" color="primary" disabled={state.submitting}>
          Submit
        </Button>
      </form>
        <CardContent>
  
            <Typography variant="h5" component="div">
           
            </Typography>
        </CardContent>
    </StyledCard>
    
    <StyledCardBehind>
    <ImgCard>
    
            <CardContent>
                <StyledTypography variant="h5" component="div" sx={{ color: "white"}} >
                I LOOK FORWARD TO CONNECTING WITH YOU!
                </StyledTypography>
            </CardContent>
            </ImgCard>
    </StyledCardBehind>
       
    
        </CardContainer>
        
    </MainContent>
    
    );   
}
