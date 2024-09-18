import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import backgroundImage from "../../assets/images/trees.jpeg";
import imageOfMe from "../../assets/images/medrawingstyle.png";
import NavCard from "../Header/NavCard";
import AboutMe from "./AboutMe";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    paddingTop: "10%",
    width: "25%",
    height: "100vh",
    position: "fixed",
    zIndex: 1000,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  navCard: {
    backgroundColor: "rgba(247, 233, 186, 1) !important",
    width: "100%",
    height: "100%",
    // marginLeft: '40px',
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
    border: "1px solid black",
    padding: "5px",
    backgroundColor: "#111313",
    // height: '80%',
    // marginTop: '25px',
    // marginLeft: '0px',
    // marginRight: '-40px',
    boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, .25)",
    // position: 'relative',
  },
  styledTypography: {
    // position: 'absolute',
    // left: '5%',
    // top: '2%',
    // zIndex: 3,
    // fontSize: '1.5rem',
    // color: 'white',
  },

 
}));

export default function Home() {
  const classes = useStyles();
  return (
    
    
    <div className={classes.mainContent}>
      <div className={classes.cardContainer}>
        <Card className={classes.navCard}>
          <CardContent>
            <Typography variant="h5" component="div">
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
          <Typography>Notes</Typography>
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
