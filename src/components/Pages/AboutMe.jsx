import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Link,
  Grid2,
  TextField,
} from "@mui/material";
import backgroundTreeImg from "../../assets/images/trees.jpeg";
import imageOfMe from "../../assets/images/medrawingstyle.png";
import NavCard from "../Header/NavCard";
import "../../styles/AboutMe.css";
import { margin } from "@mui/system";
import youngSelf from "../../assets/images/youngself.jpg";
import lakeCloud from "../../assets/images/lakesummer.jpg";
import nefall from "../../assets/images/nefall.jpg";
import breweryLight from "../../assets/images/brewerylight.jpg";

//TODO: To wordy as is.  Need to break it up into smaller sections and add images to break up the text.

const useStyles = makeStyles((theme) => ({
  mainContent: {
    //   paddingTop: '30%',
    //   backgroundColor: 'lightblue', // Added for debugging
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: "auto",
    width: "60vw",
    marginLeft: "45%",
    backgroundImage: `url(${backgroundTreeImg})`,
    boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, .25)",

    "@media (max-width: 1200px)": {
      marginLeft: "0px",
      width: "100%",
      position: "relative",
      flexDirection: "column",
      "@media (max-width: 600px)": {
        marginLTop: "50px !important",
        marginLeft: "0px",
        width: "100%",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
  },
  aboutCard: {
    backgroundColor: "rgba(224, 225, 221, .9) !important",
    width: "100vw",
    height: "auto",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "200px",
    marginBottom: "20px",

    boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, .75) !important",
    position: "relative",
    zIndex: 2,
    //   left: '80px',
    "@media (max-width: 1200px)": {
      margin: "0px",
      width: "100%",
      position: "relative",
      flexDirection: "column",
    },
  },
  paragraphHeader: {
    fontWeight: "bold !important",
    fontSize: "5px",
  },
  styledTypography: {
    //   position: 'absolute',
    flex: 1,
    left: "13%",
    top: "40%",
    zIndex: 3,
    fontSize: "1.5rem",
    textAlign: "left",
    //   color: 'white',
  },
  list: {
    textAlign: "left",
  },
  listItem: {
    marginLeft: "20px",
  },
  fallImg: {
    marginTop: '10px',
    marginBottom: '25px',
    width: "100%",
    height: "50%",
    flex: " 0 0 auto",
    boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, .25) !important",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h2" style={{ color: "white" }}>
        ABOUT ME
      </Typography>
      <Card className={classes.aboutCard}>
        <CardContent className={classes.styledCardContent}>
          <div>
            <Typography className={classes.paragraphHeader}>Welcome</Typography>
            
              <Typography className={classes.styledTypography}>
                Hi, and thank you for stopping by! Whether you&apos;re a
                potential collaborator, fellow developer, or just curious about
                my journey, I&apos;m honored by your visit.
              </Typography>
              <Grid2 container spacing={2}>
                <Grid2 item xs={12} sm={6}>
              <Typography className={classes.paragraphHeader}>
                A Little About Me
              </Typography>
              <Typography className={classes.styledTypography}>
                I am born and raised in New Hampshire, where I&apos;ve spent
                most of my life. I love everything about New England and the
                unique experiences it offers. The region is perfect for
                exploring the outdoors,from the mountains for hiking,
                skiing/snowboarding and mountain biking, to the ocean for
                surfing, paddleboarding, and boating. I love exploring the
                region and taking in all it has to offer, while documenting my
                adventures through photography and art.
                </Typography>
                </Grid2>
                <Grid2 item xs={12} sm={6}>
                <CardMedia >
                  <img
                    className={classes.fallImg}
                    src={nefall}
                    alt="Farmhouse in New England during Autumn"
                    // style={{ width: "100%", height: "50%" }}
                  />
                </CardMedia>
              </Grid2>
              
              </Grid2>
              <CardMedia></CardMedia>
            
            <Typography className={classes.paragraphHeader}>
              From Breweries to Code
            </Typography>
            <Typography className={classes.styledTypography}>
              My career began in the craft beer industry, where I spent over a
              decade mastering leadership, teamwork, and the art of creating
              experiences. I worked at Throwback Brewery and SoMe Brewing
              Company, becoming Head Brewer at both. Brewing taught me how to
              handle attention to detail, coordinate with multiple teams, and
              ensure everything—from ingredients to customer experience—was
              top-notch.
            </Typography>
            <CardMedia >
                  <img
                    className={classes.fallImg}
                    src={breweryLight}
                    alt="Rays of light shining through a brewery window onto a fermenter"
                    // style={{ width: "100%", height: "50%" }}
                  />
                </CardMedia>
            <Typography className={classes.paragraphHeader}>
              A New Passion: Web Development
            </Typography>
            <Typography className={classes.styledTypography}>
              After an incredible journey in brewing, I wanted to challenge
              myself in new ways. In 2024, I graduated from the UNH Full Stack
              Web Development Boot Camp, where I developed skills in:
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Typography>
                  <strong>Front-end</strong>: React, JavaScript, HTML, CSS{" "}
                </Typography>
              </li>
              <li className={classes.listItem}>
                <Typography>
                  <strong>Back-end</strong>: Node.js, Express.js, MySQL, MongoDB{" "}
                </Typography>
              </li>
              <li className={classes.listItem}>
                <Typography>
                  APIs and building responsive, user-friendly websites{" "}
                </Typography>
              </li>
            </ul>

            <Typography className={classes.paragraphHeader}>
              Blending Creativity, Technology, and Collaboration
            </Typography>
            <Typography className={classes.styledTypography}>
              My transition to tech wasn&apos;t just about learning new
              tools—it&apos;s about bringing the same creativity and
              collaboration I used in brewing into web development. Working on
              both solo and team projects, I thrive in environments where ideas
              are shared and problems are solved creatively.
            </Typography>
            <Typography className={classes.paragraphHeader}>
              What Drives Me
            </Typography>
            <Typography className={classes.styledTypography}>
              I love exploring the intersection of design, user experience, and
              technology. Every project is an opportunity to learn and grow.
              Whether I&apos;m building APIs or crafting front-end layouts, I
              aim to create seamless digital experiences.
            </Typography>
            <Typography className={classes.paragraphHeader}>
              Let&apos;s Build Something Together
            </Typography>
            <Typography className={classes.styledTypography}>
              I&apos;m eager to join a forward-thinking team where I can apply
              my skills, learn from others, and make a meaningful impact.
              Whether you&apos;re here to connect, collaborate, or explore
              potential partnerships, I&apos;m excited about the possibilities.
            </Typography>
            <Typography className={classes.paragraphHeader}>
              Thank You for Visiting
            </Typography>
            <Typography className={classes.styledTypography}>
              Your visit means more than words can express. I look forward to
              seeing where our paths may cross. Feel free to reach out with any
              questions, collaboration ideas, or just to say hello!
            </Typography>
            <Typography className={classes.paragraphHeader}></Typography>
            <Typography className={classes.styledTypography}></Typography>
            <Typography>Warm regards,</Typography>
            <Typography>Christopher R. Naro</Typography>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

{
  /* //   
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
// </div> */
}
