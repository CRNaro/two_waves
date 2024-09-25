import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { 
    Paper, 
    Typography, 
    Box, Card, 
    CardContent, 
    IconButton, 
    Dialog, 
    DialogContent, 
    DialogTitle } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowUpward, ArrowDownward, Close } from '@mui/icons-material';
import imageOfMe from '../../assets/images/medrawingstyle.png';
import backgroundTreeImg from '../../assets/images/trees.jpeg';
import booksProj1 from '../../assets/images/books_boxes1.png';
import booksProj2 from '../../assets/images/books_boxes2.png';
import booksProj3 from '../../assets/images/books_boxes3.png';
import booksProj4 from '../../assets/images/books_boxes4.png';
import booksProj5 from '../../assets/images/books_boxes5.png';
import booksProj6 from '../../assets/images/books_boxes6.png';
import dndProj1 from '../../assets/images/dndProj1.png';
import dndProj2 from '../../assets/images/dndProj2.png';
import dndProj3 from '../../assets/images/dndProj3.png';
import weather1 from '../../assets/images/weather1.png';
import weather2 from '../../assets/images/weather2.png';
import weather3 from '../../assets/images/weather3.png';
import weather4 from '../../assets/images/weather4.png';

//TODO: Add a description of the projects in the portfolio.  Make it so the description
//      changes when the image changes in the carousel.  
//TODO: Add all the projects to the carousel.  
//TODO: Add links to projects GitHub in the description.
//TODO: Set up nested carousel for extra images of each project.

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '60vw',
    marginLeft: '45%',
    backgroundImage: `url(${backgroundTreeImg})`,
    boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .25)',
    position: 'relative',
  },
  pageTitle: {
    position: 'absolute',
    top: '10px',
    left: '20%',
    transform: 'translateX(-50%)',
    color: 'white',
    zIndex: 3,
  },
  portfolioCard: {
    backgroundColor: 'rgba(247, 233, 186, 1)',
    width: '90%',
    height: 'auto',
    marginTop: '80px',
    marginBottom: '20px',
    boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .25)',
    zIndex: 2,
    position: 'relative',
  },
  carouselCard: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  carousel: {
    width: '60%',
    height: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  descriptionCard: {
    width: '32%',
    margin: '8px',
    backgroundColor: 'black !important',
    color: '#FFFFF0 !important',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 4,
  },
//  closeButton: {
//     position: 'absolute',
//     left: '45%',
   
//     // color: theme.palette.grey[500],
//  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
 

  const projects = [
    {
    //   src: booksProj1,
      alt: 'image of book website to search and save books',
      title: 'Books From Boxes',
      description: 'Search books via GoogleBooks API and save them to your account after login and verification. Technologies used React, HTML5, CSS, MongoDB, NodeJS, ExpressJS, JWT Highlights frontend skills in ReactJS and secure user authentication using JWT, with MongoDB backend to store user data. ',
      images: [booksProj1, booksProj2, booksProj3, booksProj4, booksProj5, booksProj6],
    },
    {
    //   src: imageOfMe,
      alt: 'me',
      title: 'Dungeons & Dragons Character Creator / Stat Compiler',
      description: 'Allows new players of Dungeons and Dragons to create and use characters with ease. Technologies used: JavaScript, HTML, CSS, Bulma, D&D API First group project, demonstrates foundational skills, a strong commitment to learning, and effective teamwork in a collaborative environment.',
      images: [dndProj1, dndProj2, dndProj3],
    },
    {
    //   src: imageOfMe,
      alt: 'me',
      title: 'How About That Weather',
      description: 'App that fetches data from OpenWeatherMap API and provides current and 5 day forecasts. Technologies used: JavaScript, HTML, CSS, Bulma, OWM API Showcases proficiency in fetching and integrating APIs and utilizing local storage.',
      images: [weather1, weather2, weather3, weather4],
    },
    {
        //   src: imageOfMe,
          alt: 'me',
          title: 'Project 4',
          description: 'App that fetches data from OpenWeatherMap API and provides current and 5 day forecasts. Technologies used: JavaScript, HTML, CSS, Bulma, OWM API Showcases proficiency in fetching and integrating APIs and utilizing local storage.',
          images: [weather1, weather2, weather3, weather4],
    },
    {
        //   src: imageOfMe,
          alt: 'me',
          title: 'Project 5',
          description: 'App that fetches data from OpenWeatherMap API and provides current and 5 day forecasts. Technologies used: JavaScript, HTML, CSS, Bulma, OWM API Showcases proficiency in fetching and integrating APIs and utilizing local storage.',
          images: [weather1, weather2, weather3, weather4],
    },
    {
        //   src: imageOfMe,
          alt: 'me',
          title: 'Project 6',
          description: 'App that fetches data from OpenWeatherMap API and provides current and 5 day forecasts. Technologies used: JavaScript, HTML, CSS, Bulma, OWM API Showcases proficiency in fetching and integrating APIs and utilizing local storage.',
          images: [weather1, weather2, weather3, weather4],
    },
    {
        //   src: imageOfMe,
          alt: 'me',
          title: 'Project 7',
          description: 'App that fetches data from OpenWeatherMap API and provides current and 5 day forecasts. Technologies used: JavaScript, HTML, CSS, Bulma, OWM API Showcases proficiency in fetching and integrating APIs and utilizing local storage.',
          images: [weather1, weather2, weather3, weather4],
    },
  ];

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projects[currentSlide].images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projects[currentSlide].images.length) % projects[currentSlide].images.length);
  };
  const handleImageClick = (image) => {
    setModalImage(image);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
    
      <Typography variant="h2" className={classes.pageTitle}>
        PORTFOLIO
      </Typography>
    
      {projects.map((project, index) => (
        
        <Card key={index} className={classes.portfolioCard} style={{ backgroundColor: 'rgba(247, 233, 186, .9)' }}>
         <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
          <CardContent className={classes.carouselCard}>
            <Carousel className={classes.carousel} autoPlay={false} onChange={(i) => setCurrentSlide(i)}>
              {project.images.map((image, i) => (
                <Paper key={i}>
                  <img src={image} alt={project.alt} className={classes.carouselImage} onClick={() => handleImageClick(image)} />
                </Paper>
              ))}
              
            </Carousel>
            <Card className={classes.descriptionCard}>
              <CardContent>
            
                <Typography variant="body1" component="div">
                  {project.description}
                </Typography>
                <Box position="relative">
                 
                 
                </Box>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      ))}

        <Dialog open={open} onClose={handleClose} className={classes.modalBox} maxWidth="xl" fullWidth>
            <DialogTitle> </DialogTitle>
            <IconButton aria-label="close" 
            className={classes.closeButton} 
            onClick={handleClose} 
            sx={{ 
                padding: '10px',
                width: '50px',
                left: '45%',
                '&:hover': {background: 'rgba(0, 0, 0, 0.7)'} }}>
                <Close sx={{ fontSize: '1.5rem'}} />
            </IconButton>
           
            <DialogContent>
              <img src={modalImage} alt="modal" className={classes.modalImage} style={{ width: '100%' }} />
            </DialogContent>
            </Dialog>

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
