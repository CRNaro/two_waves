import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box, Link, Grid, TextField } from "@mui/material";
import backgroundTreeImg from "../../assets/images/trees.jpeg";
import imageOfMe from "../../assets/images/medrawingstyle.png";
import NavCard from "../Header/NavCard";
import "../../styles/AboutMe.css";
import { margin } from "@mui/system";

//TODO: To wordy as is.  Need to break it up into smaller sections and add images to break up the text.

const useStyles = makeStyles((theme) => ({
        mainContent: {
        //   paddingTop: '30%',
        //   backgroundColor: 'lightblue', // Added for debugging
        },
        root: {
          display: 'flex',
          justifyContent: 'space-between',
          height: 'auto',
          width: '60vw',
          marginLeft: '45%',
          backgroundImage: `url(${backgroundTreeImg})`,
        boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .25)',
        '@media (max-width: 1200px)': {
          marginLeft: '0px',
          width: '100%',
          position: 'relative',
          flexDirection: 'column',
          '@media (max-width: 600px)': {
            marginLTop: '50px !important',
            marginLeft: '0px',
            width: '100%',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
          },
        },
        },
        aboutCard: {
          backgroundColor: 'rgba(224, 225, 221, .9) !important',
          width: '100vw',
          height: 'auto',
          marginLeft: '40px',
          marginRight: '40px',
          marginTop: '200px',
          marginBottom: '20px',
       
          boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .75) !important',
          position: 'relative',
          zIndex: 2,
        //   left: '80px',
        '@media (max-width: 1200px)': {
          margin: '0px',
          width: '100%',
          position: 'relative',
          flexDirection: 'column',
        },
        },
        
        styledTypography: {
        //   position: 'absolute',
          left: '13%',
          top: '40%',
          zIndex: 3,
          fontSize: '1.5rem',
          textAlign: 'left',
        //   color: 'white',
        },
       
      
      }));

export default function About() {
        const classes = useStyles();
return (
        <Box className={classes.root}>
                <Typography variant="h2" style={{ color: 'white'}}>
                        ABOUT ME
                        </Typography>
        <Card className={classes.aboutCard} >
        <CardContent className={classes.styledCardContent}>
    <div className={classes.styledTypography}>
      <Typography paragraph>
        Welcome to my professional webpage, and thank you for taking the
        time to visit. Your interest in getting to know me as well as my work, 
        means a great deal. Whether you’re a colleague, a potential
        collaborator, or simply curious about my journey, I am honored
        by your presence.
      </Typography>
      <Typography paragraph>
        With over a decade of leadership experience in the craft beer
        industry, I am now poised to apply my skills and passion to the
        dynamic world of web development. My journey began with hands-on
        brewing at Throwback Brewery, where I learned the importance of
        meticulous attention to detail, effective communication, and the
        art of crafting exceptional experiences for customers.
      </Typography>
      <Typography paragraph>
        Transitioning from brewing to tech, I recently completed the
        Full Stack Web Development Boot Camp at UNH, immersing myself in
        cutting-edge technologies like React, Node.js, and RESTful APIs.
        My background in team leadership and project management from my
        time as Head Brewer at both Throwback Brewery and SoMe Brewing
        Company has prepared me well for the collaborative environment
        of software development.
      </Typography>
      <Typography paragraph>
        My technical toolkit now includes proficiency in front-end
        development with React, JavaScript, HTML, and CSS, as well as
        back-end skills with Node.js, Express.js, and building databases
        via MySQL and MongoDB. I am excited to leverage these skills to
        create responsive, user-friendly websites that not only meet
        client needs but exceed their expectations.
      </Typography>
      <Typography paragraph>
        Entering the web development realm, my passion for learning
        drives me forward. I am captivated by the fusion of design,
        technology, and user experience, constantly seeking new
        challenges and innovations. Every project is an opportunity to
        expand my skills and deepen my understanding. Collaborating with
        forward-thinking professionals, I am committed to continuous
        growth and pushing the boundaries of what’s possible.
      </Typography>
      <Typography paragraph>
        With a strong foundation in project management, customer
        service, and problem-solving, I am eager to contribute to a
        forward-thinking team where I can continue to expand my skills
        and make a meaningful impact in the world of web development.
      </Typography>
      <Typography paragraph>
        As you navigate through these pages, I hope you’ll gain insight
        into who I am as a professional and as an individual. Whether
        you’re seeking collaboration opportunities, exploring potential
        partnerships, or simply looking to connect, I am excited about
        the possibility of us crossing paths and creating meaningful
        connections.
      </Typography>
      <Typography paragraph>
        Thank you once again for stopping by. Your visit is appreciated
        more than words can express. Please feel free to reach out if
        you have any questions or if there’s anything I can assist you
        with.
      </Typography>
      <Typography paragraph>Warm regards,</Typography>
      <Typography paragraph>Christopher R. Naro</Typography>
    </div>
  </CardContent>
        </Card>
        </Box>
)
}
     
{/* //   
// <div className={classes.root}>
// <Card className={classes.styledCard}>
  <CardContent className={classes.styledCardContent}>
    <div className="about-me-text">
        <Typography className={classes.testStyle}>adsfasefasdfsafadasdfasdfassadfasdfasdfas</Typography>
      <Typography paragraph>
        Welcome to my professional webpage, and thank you for taking the
        time to visit. Your interest in getting to know me and my work
        means a great deal. Whether you’re a colleague, a potential
        collaborator, or simply curious about my journey, I am honored
        by your presence.
      </Typography>
      <Typography paragraph>
        With over a decade of leadership experience in the craft beer
        industry, I am now poised to apply my skills and passion to the
        dynamic world of web development. My journey began with hands-on
        brewing at Throwback Brewery, where I learned the importance of
        meticulous attention to detail, effective communication, and the
        art of crafting exceptional experiences for customers.
      </Typography>
      <Typography paragraph>
        Transitioning from brewing to tech, I recently completed the
        Full Stack Web Development Boot Camp at UNH, immersing myself in
        cutting-edge technologies like React, Node.js, and RESTful APIs.
        My background in team leadership and project management from my
        time as Head Brewer at both Throwback Brewery and SoMe Brewing
        Company has prepared me well for the collaborative environment
        of software development.
      </Typography>
      <Typography paragraph>
        My technical toolkit now includes proficiency in front-end
        development with React, JavaScript, HTML, and CSS, as well as
        back-end skills with Node.js, Express.js, and building databases
        via MySQL and MongoDB. I am excited to leverage these skills to
        create responsive, user-friendly websites that not only meet
        client needs but exceed their expectations.
      </Typography>
      <Typography paragraph>
        Entering the web development realm, my passion for learning
        drives me forward. I am captivated by the fusion of design,
        technology, and user experience, constantly seeking new
        challenges and innovations. Every project is an opportunity to
        expand my skills and deepen my understanding. Collaborating with
        forward-thinking professionals, I am committed to continuous
        growth and pushing the boundaries of what’s possible.
      </Typography>
      <Typography paragraph>
        With a strong foundation in project management, customer
        service, and problem-solving, I am eager to contribute to a
        forward-thinking team where I can continue to expand my skills
        and make a meaningful impact in the world of web development.
      </Typography>
      <Typography paragraph>
        As you navigate through these pages, I hope you’ll gain insight
        into who I am as a professional and as an individual. Whether
        you’re seeking collaboration opportunities, exploring potential
        partnerships, or simply looking to connect, I am excited about
        the possibility of us crossing paths and creating meaningful
        connections.
      </Typography>
      <Typography paragraph>
        Thank you once again for stopping by. Your visit is appreciated
        more than words can express. Please feel free to reach out if
        you have any questions or if there’s anything I can assist you
        with.
      </Typography>
      <Typography paragraph>Warm regards,</Typography>
      <Typography paragraph>Christopher R. Naro</Typography>
    </div>
  </CardContent>
// </Card>
// <Card className={classes.styledCardBehind}>
//   <CardMedia className={classes.imgCard}></CardMedia>
// </Card>
// </div> */}
