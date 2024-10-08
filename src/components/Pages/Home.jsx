import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Card, CardContent, CardMedia, Button, Typography, Box, Link, Grid, TextField } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CardActionArea from "@mui/material/CardActionArea";
import backgroundImage from "../../assets/images/trees.jpeg";
import imageOfMe from "../../assets/images/medrawingstyle.png";
import NavCard from "../Header/NavCard";
import AboutMe from "./AboutMe";
import { margin } from "@mui/system";


const useStyles = makeStyles((theme) => ({
  mainContent: {
    display: "flex",
    paddingTop: "10%",
    width: "25%",
    // height: "70%",
    position: "fixed",
    zIndex: 1000,
    
  
    '@media (max-width: 1200px)': {
      marginLTop: '50px !important',
      marginLeft: '0px',
      width: '100%',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 1000,
    },
    '@media (max-width: 600px)': {
      marginLTop: '50px !important',
      marginLeft: '0px',
      width: '100%',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 1000,
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  navCard: {
    backgroundColor: "rgba(179, 138, 88, .4) !important",
    // border: "2px solid #778DA9",
    width: "100%",
    height: "100%",
    marginLeft: '28px',
    // boxShadow: '0 0 20px 20px rgba(65, 90, 119, 0.75) !important', //backlight effect
    // position: 'absolute',
    // marginTop: '300px',
    // marginBottom: '20px',
    // boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .25)',
    // position: 'relative',
    // zIndex: 2,
    // left: '80px',
    // '@media (max-width: 600px)': {
    //     width: '100vw',
    //     height: '50vh',
    //     marginLeft: '0px',
    //     marginTop: '150px',
    //     left: '0px',
    // },
  },

  styledImage: {
    width: "60%",
    borderRadius: "1%",
    border: "1px solid #778DA9",
    padding: "5px",
    backgroundColor: "#778DA9",
    // height: '80%',
    // marginTop: '25px',
    // marginLeft: '0px',
    // marginRight: '-40px',
    boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, .25)",
    // position: 'relative',
  },
linkedInLink: {
  color: 'black !important',
  
    marginBottom: '30px',
    padding: '10%',
    transform: 'scale(3.0)',
  },
// gitHubLink: {
//     color: 'black !important',
 
//     marginBottom: '30px',
//     padding: '10%',
//     transform: 'scale(3.0)',
// },
// instagramIcon: {
//     color: 'black !important',
    
//     padding: '10%',
//     marginBottom: '10px',
// },
 icon: {
    color: 'black !important',
   marginTop: '10px',
    marginBottom: '10px',
    padding: '5%',
   fontSize: '2rem',
 },
 navText: {
  
 },
}));

export default function Home() {
  const classes = useStyles();
  return (
    
    
    <div className={classes.mainContent}>
      <div className={classes.cardContainer}>
        <Card className={classes.navCard}>
          <CardContent>
            <Typography className={classes.navText} variant="h5" component="div">
              <NavCard />
            </Typography>
          </CardContent>

          <CardMedia>
            <img
              className={classes.styledImage}
              src={imageOfMe}
              alt="drawing of me"
            />
          </CardMedia>

          <Typography>Full Stack Developer</Typography>
          <Typography>React | Node | Express | MongoDB</Typography>
          <Typography>Email: CRNaro@gmail.com</Typography>
          <Box>
          <Link href="https://www.linkedin.com/in/christophernaro/" target='_blank' rel='noopener' className={classes.icon}>
            <LinkedInIcon className={classes.icon}/>
            
          </Link>
          <Link href="https://github.com/CRNaro" target='_blank' rel='noopener' className={classes.icon}>
            <GitHubIcon className={classes.icon}/>
         
          </Link>
          <Link href="https://www.instagram.com/christopher.r.naro/" target='_blank' rel='noopener' className={classes.icon}>
            <InstagramIcon className={classes.icon}/>
            </Link>
          </Box>
        </Card>

       
        
       

      </div>
    </div>
    
  );
}

{
  /* <StyledCardRight>
<CardContent style={{ padding: 0 }}>
    <img src={imageOfMe} alt="drawing of me" style={{width: "100%", height: "100%"}}/>
</CardContent>
</StyledCardRight> */
}
