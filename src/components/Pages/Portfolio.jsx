import React, { useState } from 'react';
// import Carousel from 'react-material-ui-carousel';
import { 
    Paper, 
    Typography, 
    Box, Card, 
    CardContent, 
    IconButton, 
    Dialog, 
    DialogContent, 
    DialogTitle,
    Link,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ArrowUpward, ArrowDownward, Close } from '@mui/icons-material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useInView } from 'react-intersection-observer';
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
import quizProj1 from '../../assets/images/quizProj1.png';
import quizProj2 from '../../assets/images/quizProj2.png';
import quizProj3 from '../../assets/images/quizProj3.png';
import quizProj4 from '../../assets/images/quizProj4.png';
import quizProj5 from '../../assets/images/quizProj5.png';
import quizProj6 from '../../assets/images/quizProj6.png';
import shakeitup1 from '../../assets/images/shakeitup1.png';
import shakeitup2 from '../../assets/images/shakeitup2.png';
import shakeitup3 from '../../assets/images/shakeitup3.png';
import taco1 from '../../assets/images/taco1.png';
import taco2 from '../../assets/images/taco2.png';
import taco3 from '../../assets/images/taco3.png';
import tipCalc1 from '../../assets/images/tipCalc1.png';
import tipCalc2 from '../../assets/images/tipCalc2.png';
import scheduler1 from '../../assets/images/scheduler1.png';
import scheduler2 from '../../assets/images/scheduler2.png';
import scheduler3 from '../../assets/images/scheduler3.png';
import scheduler4 from '../../assets/images/scheduler4.png';
import scheduler5 from '../../assets/images/scheduler5.png';
import scheduler6 from '../../assets/images/scheduler6.png';
import mondays1 from '../../assets/images/mondays1.png';
import mondays2 from '../../assets/images/mondays2.png';
import mondays3 from '../../assets/images/mondays3.png';
import mondays4 from '../../assets/images/mondays4.png';
import heartline1 from '../../assets/images/heartline1.png';
import heartline2 from '../../assets/images/heartline2.png';
import heartline3 from '../../assets/images/heartline3.png';
import heartline4 from '../../assets/images/heartline4.png';
import heartline5 from '../../assets/images/heartline5.png';
import heartline6 from '../../assets/images/heartline6.png';
import heartline7 from '../../assets/images/heartline7.png';
import jotDown1 from '../../assets/images/jotDown1.png';
import jotDown2 from '../../assets/images/jotDown2.png';
import jotDown3 from '../../assets/images/jotDown3.png';
import jotDown4 from '../../assets/images/jotDown4.png';
import jotDown5 from '../../assets/images/jotDown5.png';
import Carousel from '../ProjectCarousel/Carousel';
import { display } from '@mui/system';

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
    '@media (max-width: 1200px)': {
      display: 'flex',
      marginLeft: '0px',
      width: '100%',
      position: 'relative',
      flexDirection: 'column',
      '@media (max-width: 600px)': {
        display: 'flex',
        marginLTop: '50px !important',
        marginLeft: '0px',
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  },
  pageTitle: {
    position: 'absolute',
    // top: '10px',
    left: '20%',
    // transform: 'translateX(-50%)',
    color: 'white',
    // zIndex: 3,
    // '@media (max-width: 1200px)': {
    //   marginLeft: '20%',
    //   width: '100%',
    //   position: 'relative',
    //   flexDirection: 'column',
    //   '@media (max-width: 600px)': {
    //     marginLTop: '50px !important',
    //     marginLeft: '20%',
    //     width: '100%',
    //     position: 'relative',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //   },
    // },
  },
  portfolioCard: {
    backgroundColor: 'rgba(224, 225, 221, .9) !important',
    width: '90%',
    height: '100%',
    marginTop: '90px',
    marginBottom: '20px',
    boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .85) !important',
    zIndex: 2,
    position: 'relative',
    '@media (max-width: 1200px)': {
      display: 'flex',
      marginLeft: '0px',
      width: '100%',
      position: 'relative',
      flexDirection: 'column',
      '@media (max-width: 600px)': {
        display: 'flex',
        marginLTop: '50px !important',
        marginLeft: '0px',
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  },
  carouselCard: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    '@media (max-width: 1200px)': {
      display: 'flex',
      marginLeft: '0px',
      width: '100%',
      position: 'relative',
      flexDirection: 'column',
      '@media (max-width: 600px)': {
        display: 'flex',
        marginLTop: '50px !important',
        marginLeft: '0px',
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
  },
  carousel: {
    width: '60%',
    height: '100%',
  },
  carouselPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    // objectFit: 'contain',
    cursor: 'pointer',
  },
  descriptionCard: {
    width: '50%',
    marginLeft: '2%',
    marginRight: '4%',
    backgroundColor: 'black !important',
    color: '#FFFFF0 !important',
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
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 4,
  },
  icon: {
    color: 'white',
    fontSize: '2.5rem !important',
    cursor: 'pointer',
  },
}));

const projects = [
    {
    //   TODO: add different sections above and under description for tech used and links to GitHub
      alt: 'image of book website to search and save books',
      title: 'Books From Boxes',
      description: 'Search books via GoogleBooks API and save them to your account after login and verification. Highlights frontend skills in ReactJS and secure user authentication using JWT, with MongoDB backend to store user data. ',
      technology: 'React, HTML5, CSS, MongoDB, NodeJS, ExpressJS, JWT',
      link: 'https://github.com/CRNaro/books-from-boxes',
      images: [booksProj1, booksProj2, booksProj3, booksProj4, booksProj5, booksProj6],
    },
    {
      alt: 'me',
      title: 'Dungeons & Dragons Character Creator / Stat Compiler',
      description: 'Allows new players of Dungeons and Dragons to create and use characters with ease. Demonstrates foundational skills, a strong commitment to learning, and effective teamwork in a collaborative environment.',
      technology: 'JavaScript, HTML5, CSS, Bulma, D&D API',
      link: 'https://github.com/CRNaro/dnd-stat-compiler',
      images: [dndProj1, dndProj2, dndProj3],
    },
    {
      alt: 'me',
      title: 'How About That Weather',
      description: 'App that fetches data from OpenWeatherMap API and provides current and 5 day forecasts. Showcases proficiency in fetching and integrating APIs and utilizing local storage.',
      technology: 'JavaScript, HTML5, CSS, Bulma, OWM API ',
      link: 'https://github.com/CRNaro/how-about-that-weather-06',
      images: [weather1, weather2, weather3, weather4],
    },
    {
          alt: 'me',
          title: 'Lets Cook/Shake It Up',
          description: 'Cocktail app lets the user find a new cocktail to try.  Built as part of a job application, marking my first project utilizing Django, demonstrating adaptability and quick learning of new frameworks.',
          technology: 'React, JavaScript, MaterialUI, Python, Django, NodeJS, ExpressJS, HTML5, CSS',
          link: 'https://github.com/CRNaro/lets-cook',
          images: [shakeitup1, shakeitup2, shakeitup3], 
    },
    {
        
          alt: 'me',
          title: 'Gordita Local',
          description: 'Website that showcases birria taco company. Currently in development with plans to integrate live Instagram updates and Google API functionality to allow the owner to manage the calendar and schedule of events.',
          technology: 'React, MaterialUI, JavaScript, HTML5, CSS, NodeJS ',
          link: 'https://github.com/CRNaro/gordita-local',
          images: [taco1, taco2, taco3],
    },
    {
          alt: 'me',
          title: 'Walkings Still Honest',
          description: 'This project was created as a quick and easy way for restaurant staff to disbursed cash tips for the day based on hours worked and amount received. Demonstrates the ability to implement core functionalities, such as calculating and distributing cash tips, based on custom business logic.',
          technology: 'JavaScript, React, HTML5, CSS, MaterialUI, NodeJS',
          link: 'https://github.com/CRNaro/walkings-still-honest',
          images: [tipCalc1, tipCalc2],
    },
    {
          alt: 'me',
          title: 'Warm the Heart',
          description: 'This application provides the employees of Hear Line Stove shop with the ability to create and search customers in the database.  Project still in progress',
          technology: 'JavaScript, React, HTML5, CSS, NodeJS, MongoDB, Express',
          link: 'https://github.com/CRNaro/warm-the-heart',
          images: [heartline1, heartline2, heartline3, heartline4, heartline5, heartline6, heartline7],
    },
    {
          alt: 'me',
          title: 'Pencil Me In',
          description: 'An interactive day planner designed to help you stay organized and keep track of your daily projects and events. As someone who frequently juggles multiple tasks, I built this tool to streamline scheduling and ensure I complete everything before the day ends. With an intuitive design, this app visually tracks time, providing a clear overview of your tasks throughout the day.',
          technology: 'JavaScript, HTML5, CSS',
          link: 'https://github.com/CRNaro/pencil-me-in-05',
          images: [scheduler1, scheduler2, scheduler3, scheduler4, scheduler5, scheduler6],
    },
    {
          alt: 'me',
          title: 'Jot This Down',
          description: 'This note taker app was created to help manage my projects and daily tasks effectively. The goal is to keep track of project notes and ideas in one place, ensuring I never lose important information. With a simple and clean interface, this app allows me to jot down notes quickly and efficiently, keeping my thoughts organized and accessible.',
          technology: 'JavaScript, HTML5, CSS',
          link: '',
          images: [jotDown1, jotDown2, jotDown3, jotDown4, jotDown5],
    },
    {
          alt: 'me',
          title: 'Case of the Mondays',
          description: 'This project is a command-line application designed to manage a companys employee database. It serves as a simple Content Management System (CMS) that allows business owners to interact with and organize information regarding their departments, roles, and employees. Built with Node.js, the application leverages the Inquirer package for interactive prompts and MySQL for persistent data storage. It provides an intuitive interface to view and modify employee data, aiding in business planning and organization.',
          technology: 'JavaScript, HTML5, CSS, MySQL, Node.js, Express.js',
          link: 'https://github.com/CRNaro/case-of-the-mondays-12',
          images: [mondays1, mondays2, mondays3, mondays4],
    },
    {
      alt: 'me',
      title: 'Quiz Time',
      description: 'Quiz app fully created by me.  Pulls questions created by me, score is based on time, and high scores are saved. One of my earliest projects during class, demonstrates proficiency in JS and local storage.  ',
      technology: 'JavaScript, HTML5, CSS',
      link: 'https://github.com/CRNaro/quiz-time-04',
      images: [quizProj1, quizProj2, quizProj3, quizProj4, quizProj5, quizProj6],
    },
  ];



export default function Portfolio() {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
//   const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
 

  
//   const handleNextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % projects[currentSlide].images.length);
//   };

//   const handlePrevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + projects[currentSlide].images.length) % projects[currentSlide].images.length);
//   };
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
          {/* <Card className={classes.descriptionCard}>
            <CardContent>
              <Typography variant="body1" component="div">
                <strong>Project Description:</strong> {project.description}
              </Typography>
              <Typography variant="body2" component="div" style={{ marginTop: '10px' }}>
                <strong>Technologies Used:</strong> {project.technology}
              </Typography>
              <Typography variant="body2" component="div" style={{ marginTop: '10px' }}>
                <Link href={project.link} target="_blank" rel="noopener"><GitHubIcon className={classes.icon}/></Link>
              </Typography>
              <Box position="relative">
              </Box>
            </CardContent>
          </Card> */}
          <Carousel
            images={project.images}
            alt={project.alt}
            onImageClick={handleImageClick}
          />
            {/* <Carousel className={classes.carousel} autoPlay={false} onChange={(i) => setCurrentSlide(i)}>
              {project.images.map((image, i) => {
                const { ref, inView } = useInView({
                  triggerOnce: true, // Load the image only once when it comes into view
                  threshold: 0.1, // Trigger when 10% of the image is in view
                });

                return (
                  <Paper key={i} className={classes.carouselPaper}>
                    <div ref={ref} className={classes.imageContainer}>
                      {inView && (
                        <img 
                          src={image} 
                          alt={project.alt} 
                          className={classes.carouselImage}
                          onClick={() => handleImageClick(image)} 
                        />
                      )}
                    </div>
                  </Paper>
                );
              })}
            </Carousel> */}
            <Card className={classes.descriptionCard}>
              <CardContent>
                <Typography variant="body1" component="div">
                  <strong>Project Description:</strong> {project.description}
                </Typography>
                <Typography variant="body2" component="div" style={{ marginTop: '10px' }}>
                  <strong>Technologies Used:</strong> {project.technology}
                </Typography>
                <Typography variant="body2" component="div" style={{ marginTop: '10px'}}>
                  {/* GitHub Repository: */}
                  <Link href={project.link} target="_blank" rel="noopener"><GitHubIcon className={classes.icon}/></Link>
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
            '&:hover': {background: 'rgba(0, 0, 0, 0.7)'} 
          }}>
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
