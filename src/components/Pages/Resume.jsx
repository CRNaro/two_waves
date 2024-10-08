import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import backgroundTreeImg from "../../assets/images/trees.jpeg";
import NavCard from "../Header/NavCard";
import "../../styles/AboutMe.css";
import { Box, Stack, Modal } from "@mui/material";
import { Balance } from "@mui/icons-material";
import html5Logo from "../../assets/images/html5Logo.png";
import cssLogo from "../../assets/images/cssLogo.png";
import JavascriptLogo from "../../assets/images/javascriptLogo.png";
import reactLogo from "../../assets/images/reactLogo.png";
import bootstrapLogo from "../../assets/images/bootstrapLogo.png";
import muiLogo from "../../assets/images/muiLogo240.png";
import nodejsLogo1 from "../../assets/images/nodejsLogo1.png";
import expressLogo from "../../assets/images/expressLogo.png";
import mysqlLogo from "../../assets/images/mysqlLogo.png";
import mongodbLogo from "../../assets/images/mongodbLogo.png";
import djangoLogo from "../../assets/images/djangoLogo.png";
import phpLogo from "../../assets/images/phpLogo.png";
import resumePDF from "../../assets/pdf/resume.pdf";
import { display, height, padding, width } from "@mui/system";


//TODO: Set up and use SVG images for the logos to make them scalable.

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
    // boxShadow: '0 0 20px 20px rgba(65, 90, 119, 0.75) !important', //backlight effect
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
  styledCardContent: {
    width: "100%",
    height: "auto",
    backgroundColor: "rgba(224, 225, 221, .9) !important",
    // marginBottom: "40px", 
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    // justifyContent: "center",
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
  proficienciesCard: {
    backgroundColor: "rgba(224, 225, 221, .9) !important",
    width: "auto",
    height: "auto",
    boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .85) !important',
    marginTop: "100px",
    marginBottom: "40px",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    // transform: "translateX(-20%)",
    // '@media (max-width: 1200px)': {
    //   marginLeft: '0px',
    //   width: '100%',
    //   position: 'relative',
    //   flexDirection: 'column',
    //   '@media (max-width: 600px)': {
    //     marginLTop: '50px !important',
    //     marginLeft: '0px',
    //     width: '100%',
    //     position: 'relative',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //   },
    // },
  },
  styledTypography: {
   
  },
  aboutCard: {
    backgroundColor: "rgba(247, 233, 186, .1) !important",
    margin: "5%",
    padding: "2%",
    boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .50) !important'
  },
  logo: {
    width: "auto",
    height: "auto",
  },
  //   expandedContent: {
  //     marginTop: "10px",
  //   },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
  },
  modalContent: {
    backgroundColor: "rgba(247, 233, 186, 1) !important",
    padding: theme.spacing(2, 4, 3),
    boxShadow: theme.shadows[5],
    outline: "none",
    width: "25%",
  },
  modalLogo: {
    width: "100px",
    height: "100px",
    marginBottom: theme.spacing(2),
    objectFit: "contain !important",
    objectPosition: "center !important",
  },
  pdfContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "660px",
    flexGrow: 1,
  },
  downloadLink: {
    display: "flex",
    marginTop: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  resumeCardContent: {
    height: "100%",
  },
}));

const frontEndProficiencies = [
  {
    name: "HTML",
    logo: html5Logo,
    description:
      "Proficient in writing semantic HTML markup to create the structure of web pages, ensuring accessibility and SEO best practices.",
  },
  {
    name: "CSS",
    logo: cssLogo,
    description:
      "Skilled in using CSS to style web pages, including layout design, responsiveness, and animation effects. Familiar with CSS preprocessors like Sass for efficient styling workflows.",
  },
  {
    name: "JavaScript",
    logo: JavascriptLogo,
    description:
      "Experienced in JavaScript programming, including ES6+ features, DOM manipulation, and event handling. Proficient in writing clean, modular JavaScript code to enhance user interactivity.",
  },
  {
    name: "React",
    logo: reactLogo,
    description:
      "Proficient in building dynamic and interactive user interfaces using React.js. Experienced in state management, component lifecycle methods, and React Router for single-page applications.",
  },
  {
    name: "Material-UI",
    logo: muiLogo,
    description:
      "Proficient with Material-UI framework for rapid prototyping and responsive web design. Skilled in utilizing Material-UI components and utilities to create modern and visually appealing UIs.",
  },
  {
    name: "BootStrap",
    logo: bootstrapLogo,
    description:
      "Familiar with Bootstrap framework for rapid prototyping and responsive web design. Skilled in utilizing Bootstrap components and utilities to create modern and visually appealing UIs.",
  },
  // Add other proficiencies here...
];
const backEndProficiencies = [
  {
    name: "Node.js",
    logo: nodejsLogo1,
    description:
      "Proficient in Node.js for building scalable, event-driven applications. Experienced in handling asynchronous operations and utilizing the rich ecosystem of npm packages for full-stack JavaScript development.",
  },
  {
    name: "Express.js",
    logo: expressLogo,
    description:
      "Skilled in using Express.js to create RESTful APIs and manage server-side routing. Proficient in middleware integration for handling authentication, logging, and error management in web applications.",
  },
  {
    name: "MySQL",
    logo: mysqlLogo,
    description:
      "Experienced in working with MySQL for database management, including writing complex SQL queries, creating efficient schema designs, and ensuring data integrity through normalization and indexing.",
  },
  {
    name: "MongoDB /NoSQL",
    logo: mongodbLogo,
    description:
      "Proficient in MongoDB for building NoSQL databases, handling large datasets, and working with document-oriented storage. Skilled in designing flexible schemas and using aggregation pipelines for data processing.",
  },
  {
    name: "Django",
    logo: djangoLogo,
    description:
      "New to using Django but quickly learning to develop secure, scalable, and high-performance web applications. Proficient in Django's ORM, templating engine, and built-in admin panel for rapid application development.",
  },
  {
    name: "PHP",
    logo: phpLogo,
    description:
      "Currently still learning PHP for server-side scripting, creating dynamic websites and applications. Skilled in integrating PHP with MySQL databases, managing session data, and building secure, efficient web solutions.",
  },
];

export default function Resume() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(null);
  const [open, setOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => {
    setShowResume(!showResume);
  };

  const handleOpen = (index) => {
    setExpanded(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(null);
  };

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h2" style={{ color: "white" }}>
        RESUME
      </Typography>
      <Card
        className={classes.proficienciesCard}
      >
        <CardContent className={classes.resumeCardContent}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumePDF;
              link.download = "resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download My Resume
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleShowResume}
          >
            {showResume ? "Hide Resume" : "Show Resume"}
          </Button>
          {showResume && (
            <Card>
              <CardContent>
                <CardMedia
                  className={classes.pdfContainer}
                  component="iframe"
                  src={resumePDF}
                  width="100%"
                  height="auto"
                  style={{ border: "none" }}
                  title="Resume PDF"
                />
              </CardContent>
            </Card>
          )}

          <div className={classes.styledTypography}>
            <Typography variant="h4">Front End Proficiencies</Typography>
            <Stack
              spacing={3}
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
            >
              {frontEndProficiencies.map((frontEndProficiencies, index) => (
                <Box
                  key={index}
                  width={{ xs: "100%", sm: "45%", md: "29%" }}
                  mb={3}
                >
                  <Card className={classes.aboutCard}>
                    <CardActionArea onClick={() => handleOpen(index)}>
                      <CardMedia
                        component="img"
                        alt={frontEndProficiencies.name}
                        image={frontEndProficiencies.logo}
                        // title={frontEndProficiencies.name}
                        className={classes.logo}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{ textWrap: Balance }}
                        >
                          {frontEndProficiencies.name}
                        </Typography>
                        {/* {expanded === index && (
                              <Typography variant="body2" color="textSecondary" component="p" className={classes.expandedContent}>
                                {frontEndProficiencies.description}
                              </Typography>
                              )}  */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              ))}
            </Stack>
            <Modal open={open} onClose={handleClose} className={classes.modal}>
              <Box className={classes.modalContent}>
                {expanded !== null && (
                  <>
                    <CardMedia
                      component="img"
                      alt={frontEndProficiencies[expanded].name}
                      image={frontEndProficiencies[expanded].logo}
                      title={frontEndProficiencies.name}
                      className={classes.modalLogo}
                    />
                    <Typography variant="h5" component="div">
                      {frontEndProficiencies[expanded].name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {frontEndProficiencies[expanded].description}
                    </Typography>
                  </>
                )}
              </Box>
            </Modal>
            <Typography variant="h4">Back End Proficiencies</Typography>
            <Stack
              spacing={3}
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
            >
              {backEndProficiencies.map((backEndProficiencies, index) => (
                <Box
                  key={index}
                  width={{ xs: "100%", sm: "45%", md: "30%" }}
                  mb={3}
                >
                  <Card className={classes.aboutCard}>
                    <CardActionArea onClick={() => handleOpen(index)}>
                      <CardMedia
                        component="img"
                        alt={backEndProficiencies.name}
                        height="140"
                        image={backEndProficiencies.logo}
                        title={backEndProficiencies.name}
                        className={classes.logo}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{ textWrap: Balance }}
                        >
                          {backEndProficiencies.name}
                        </Typography>
                        {/* {expanded === index && (
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.expandedContent}
                          >
                            {backEndProficiencies.description}
                          </Typography>
                        )} */}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              ))}
            </Stack>
            <Modal open={open} onClose={handleClose} className={classes.modal}>
              <Box className={classes.modalContent}>
                {expanded !== null && (
                  <>
                    <CardMedia
                      component="img"
                      alt={backEndProficiencies[expanded].name}
                      image={backEndProficiencies[expanded].logo}
                      title={backEndProficiencies.name}
                      className={classes.modalLogo}
                    />
                    <Typography variant="h5" component="div">
                      {backEndProficiencies[expanded].name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {backEndProficiencies[expanded].description}
                    </Typography>
                  </>
                )}
              </Box>
            </Modal>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

// import styled from '@emotion/styled';
// import React from "react";
// import Card from "@mui/material/Card";
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import backgroundImage from '../../assets/images/trees.jpeg';
// import imageOfMe from '../../assets/images/medrawingstyle.png';
// import NavCard from '../Header/NavCard';

// const StyledCard = styled(Card)`
//     background-color: rgba(247, 233, 186, 1);
//     width: 50%;
//     height: 100%;
//     margin-left: 40px;
//     margin-top: 300px;
//     margin-bottom: 20px;
//     box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
//     position: relative;
//     z-index: 2;
//     left: 10%;
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
// width: 75vw;
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
// width: 80%;
// height: 60%;
// z-index: 0;
// box-shadow: 10px 5px 10px 5px rgba(0, 0, 0, .25);
// `
// const StyledButton = styled(Button)`
//     background-color: #231F20;
// `;
// const ImgCard = styled(Card)`
//     background-image: url(${backgroundImage});
//     z-index: 3;
//     width: 100%;
//     height:25%;
// `
// const ResumeTypography = styled(Typography)`
// text-align: left;
// `

// export default function Resume() {
//     return (
//         <MainContent>

//                <StyledTypography>

//                </StyledTypography>
//             <CardContainer>
//         <StyledCard>
// <CardContent>

//     <ResumeTypography variant="h5" component="div">
//     <div className="resume-header">
//     <div className='proficiencies'>

//    <h1>My proficiencies:</h1>
//    <ul>
//         <h3>Frontend:</h3>
//          <li>HTML:  Proficient in writing semantic HTML markup to
//             create the structure of web pages, ensuring accessibility and
//             SEO best practices.
//             </li>
//          <li>CSS: Skilled in using CSS to style web pages, including layout
//             design, responsiveness, and animation effects. Familiar with
//             CSS preprocessors like Sass for efficient styling workflows.
//             </li>
//          <li>JavaScript: Experienced in JavaScript programming, including
//             ES6+ features, DOM manipulation, and event handling. Proficient
//             in writing clean, modular JavaScript code to enhance user
//             interactivity and functionality.
//             </li>
//          <li>React: Proficient in building dynamic and interactive user
//             interfaces using React.js. Experienced in state management,
//             component lifecycle methods, and React Router for single-page
//             applications.
//             </li>
//          <li>Bootstrap: Familiar with Bootstrap framework for rapid
//              prototyping and responsive web design. Skilled in utilizing
//               Bootstrap components and utilities to create modern and
//               visually appealing UIs.
//         </li>
//         <li>Handlebars: Experienced in using Handlebars.js templating
//             engine to generate dynamic HTML content with reusable templates.
//             Proficient in integrating Handlebars with backend frameworks
//             like Express.js for server-side rendering.
//         </li>
//         <li>jQuery: Proficient in jQuery library for simplifying DOM
//             manipulation, event handling, and AJAX interactions. Skilled
//             in optimizing jQuery code for improved performance and
//             maintainability.
//             </li>
//             <br></br>
//          <h3>Backend:</h3>
//          <li>Node.js: Experienced in server-side JavaScript development
//              using Node.js runtime environment. Proficient in building
//               scalable and efficient backend applications with Node.js,
//               including RESTful APIs and WebSocket servers.
//               </li>
//          <li>Express: Skilled in Express.js framework for building robust
//             and scalable web applications and APIs. Experienced in middleware
//              integration, routing, error handling, and authentication
//              mechanisms.
//              </li>
//          <li>MySQL: Experienced in relational database management using
//             MySQL. Proficient in designing normalized database schemas,
//             writing SQL queries, and optimizing database performance through
//             indexing and query optimization techniques.
//             </li>
//          <li>MongoDB: Proficient in MongoDB NoSQL database for data storage
//             and retrieval. Experienced in designing schema-less databases,
//             performing CRUD operations, and utilizing MongoDB aggregation
//             framework for complex queries.
//             </li>
//     </ul>

// </div>

//     {/* <a href={ResumePDF} download className="nav-link">Download Resume</a> */}
//     {/* <p>
//         If you have any further questions, please feel free to <Link to="/contact" className="nav-link">contact me</Link>.

//     </p> */}
//     </div>
//     </ResumeTypography>
// </CardContent>
//     </StyledCard>
//     <StyledCardBehind>
//     <ImgCard>
//             <CardContent>

//                 <Typography variant="h5" component="div" sx={{ color: "white"}} >
//                 RESUME

//                 </Typography>

//             </CardContent>
//             </ImgCard>
//             <a href="https://docs.google.com/document/d/16AdxCeuhRO7gamwwCkP_lkALvivaoA3wujUuExulIBg/edit?usp=sharing" target="_blank">
//             <StyledButton>Via Google Docs</StyledButton>
//                 </a>
//                 <a href={CRNResume} download className="nav-link">
//     <StyledButton>Download My Resume</StyledButton>
// </a>
//     </StyledCardBehind>

//         </CardContainer>
//     </MainContent>
//     );
// }
