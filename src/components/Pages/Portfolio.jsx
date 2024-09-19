import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardActionArea from "@mui/material/CardActionArea";
import imageOfMe from "../../assets/images/medrawingstyle.png";
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
  Grid,
  TextField,
  Paper,
} from "@mui/material";
import backgroundTreeImg from "../../assets/images/trees.jpeg";
// import imageOfMe from "../../assets/images/medrawingstyle.png";
import NavCard from "../Header/NavCard";
import "../../styles/AboutMe.css";

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
  },
  title: {
    position: 'absolute', 
   
    left: '50%',
    transform: 'translateX(-50%)', 
    color: 'white',
    zIndex: 3,
  },
  portfolioCard: {
    backgroundColor: "rgba(247, 233, 186, 1)",
    width: "100vw",
    height: "auto",
    marginLeft: "40px",
    marginRight: "40px",
    marginTop: "200px",
    marginBottom: "20px",

    boxShadow: "10px 5px 10px 5px rgba(0, 0, 0, .25)",
    //   position: 'relative',
    zIndex: 2,
    //   left: '80px',
  },

  styledTypography: {
    //   position: 'absolute',
    left: "13%",
    top: "40%",
    zIndex: 3,
    fontSize: "1.5rem",
    textAlign: "left",
    //   color: 'white',
  },
    carouselCard: {
    display: "flex",
    // justifyContent: "center",
    width: "100%",
    },
  carousel: {
    width: "64%",
    
  },
  descriptionCard: {
    width: "40%",
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  const items =[
    { src: imageOfMe, alt: "me" },
    { src: imageOfMe, alt: "me" },
    { src: imageOfMe, alt: "me" },
  ];

  return (
  
    <Box className={classes.root}>
      
        <Typography variant="h2" className={classes.title}>
          MY PORTFOLIO
        </Typography>
     

      <Card
        className={classes.portfolioCard}
        style={{ backgroundColor: "rgba(247, 233, 186, .9)" }}
      >
        <CardContent className={classes.carouselCard}>
          <Carousel className={classes.carousel}>
          {items.map((item, i)=>(
            <Paper key={i}>
            <img src={item.src} alt={item.alt} />
            </Paper>
          ))}
          </Carousel>
          <Card className={classes.descriptionCard}>
            <CardContent >
                <Typography variant="h5" component="div"></Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CardActionArea from '@mui/material/CardActionArea';
// import imageOfMe from '../../assets/images/medrawingstyle.png';

// import styled from '@emotion/styled';
// import React from "react";
// import Card from "@mui/material/Card";

// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import backgroundImage from '../../assets/images/trees.jpeg';

// import NavCard from '../Header/NavCard';

// const StyledCard = styled(Card)`
//     background-color: rgba(247, 233, 186, 1);
//     width: 75%;
//     height: 100%;
//     margin-left: 40px;
//     margin-top: 10%;
//     margin-bottom: 20px;
//     box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
//     position: relative;
//     z-index: 2;
//     left: 80px;
//   `;
// const MainContent = styled.div`
//     padding-top: 10%;
// `;
// const CardContainer = styled.div`
// display: flex;
// justify-content: space-between;
// `;
// const StyledCardRight = styled(Card)`
// background-color: rgba(173, 216, 230, 0.1);
// width: 75%;
// height: 40vh;

// margin-top: -30px;
// margin-bottom: 20px;
// box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
// `
// const StyledImage = styled.img`
//     width: 75vw;
//     height: 125vh;
//     margin-top: 25px;
//     margin-left: 0px;
//     margin-right: -40px;
//     box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
//     position: relative;
//     `
// const StyledTypography = styled(Typography)`
//     position: absolute;
//     left: 13%;
//     top: 40%;
//     z-index: 3;
//     font-size: 1.5rem;
//     color: white;
// `
// const StyledCardBehind = styled(Card)`
// position: absolute;
// background-color: #231F20;
// margin-left: 60px;
// width: 100%;
// height: 200vh;
// z-index: 0;
// box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
// `
// const StyledCarousel = styled(Carousel)`
//     width: 60%;
// `;

// export default function Portfolio() {
//     return (
//         <MainContent>

//                <StyledTypography>

//                </StyledTypography>
//             <CardContainer>
//         <StyledCard>
//         <CardContent>
//             <StyledCarousel>
//                 <div>
//                     <img src={imageOfMe} alt="me"/>
//                 </div>
//                 <div>
//                     <img src={imageOfMe} alt="me"/>
//                 </div>
//                 <div>
//                     <img src={imageOfMe} alt="me"/>
//                 </div>
//             </StyledCarousel>
//             <Typography variant="h5" component="div">

//             </Typography>
//         </CardContent>
//     </StyledCard>
//     <StyledCardBehind>
//             <CardContent>
//                 <Typography variant="h5" component="div" sx={{ color: "white"}} >
//                 PORTFOLIO
//                 </Typography>
//             </CardContent>
//     </StyledCardBehind>

//         </CardContainer>
//     </MainContent>
//     );
// }
