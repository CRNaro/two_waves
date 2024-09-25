import CRNResume from '../../assets/images/ResumeCRN.pdf';

import styled from "@emotion/styled";
import { makeStyles } from "@mui/styles";
import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import backgroundTreeImg from "../../assets/images/trees.jpeg";
import imageOfMe from "../../assets/images/medrawingstyle.png";
import NavCard from "../Header/NavCard";
import "../../styles/AboutMe.css";
import { Box } from "@mui/system";


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
        },
        aboutCard: {
                backgroundColor: 'rgba(247, 233, 186, 1)',
          width: '100vw',
          height: 'auto',
          marginLeft: '40px',
          marginRight: '40px',
          marginTop: '200px',
          marginBottom: '20px',
       
          boxShadow: '10px 5px 10px 5px rgba(0, 0, 0, .25)',
        //   position: 'relative',
          zIndex: 2,
        //   left: '80px',
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

export default function Resume() {
        const classes = useStyles();
return (
        <Box className={classes.root}>
                <Typography variant="h2" style={{ color: 'white'}}>
                        RESUME
                        </Typography>
        <Card className={classes.aboutCard} style={{ backgroundColor: 'rgba(247, 233, 186, .9)'}}>
        <CardContent className={classes.styledCardContent}>
    <div className={classes.styledTypography}>
      <Typography>
       </Typography>
       <CardContent>
       <CardContent>
   
   <Typography variant="h5" component="div">
   <div className="resume-header">
   <div className='proficiencies'>
  
  <h1>My proficiencies:</h1> 
  <ul>
       <h3>Frontend:</h3>
        <li>HTML:  Proficient in writing semantic HTML markup to 
           create the structure of web pages, ensuring accessibility and 
           SEO best practices.
           </li>
        <li>CSS: Skilled in using CSS to style web pages, including layout 
           design, responsiveness, and animation effects. Familiar with 
           CSS preprocessors like Sass for efficient styling workflows.
           </li>
        <li>JavaScript: Experienced in JavaScript programming, including 
           ES6+ features, DOM manipulation, and event handling. Proficient 
           in writing clean, modular JavaScript code to enhance user 
           interactivity and functionality.
           </li>
        <li>React: Proficient in building dynamic and interactive user 
           interfaces using React.js. Experienced in state management, 
           component lifecycle methods, and React Router for single-page 
           applications.
           </li>
        <li>Bootstrap: Familiar with Bootstrap framework for rapid
            prototyping and responsive web design. Skilled in utilizing
             Bootstrap components and utilities to create modern and 
             visually appealing UIs.
       </li>
       <li>Handlebars: Experienced in using Handlebars.js templating 
           engine to generate dynamic HTML content with reusable templates. 
           Proficient in integrating Handlebars with backend frameworks 
           like Express.js for server-side rendering.
       </li>
       <li>jQuery: Proficient in jQuery library for simplifying DOM 
           manipulation, event handling, and AJAX interactions. Skilled 
           in optimizing jQuery code for improved performance and 
           maintainability.
           </li>
           <br></br>
        <h3>Backend:</h3>
        <li>Node.js: Experienced in server-side JavaScript development
            using Node.js runtime environment. Proficient in building
             scalable and efficient backend applications with Node.js, 
             including RESTful APIs and WebSocket servers.
             </li>
        <li>Express: Skilled in Express.js framework for building robust 
           and scalable web applications and APIs. Experienced in middleware
            integration, routing, error handling, and authentication 
            mechanisms.
            </li>
        <li>MySQL: Experienced in relational database management using 
           MySQL. Proficient in designing normalized database schemas, 
           writing SQL queries, and optimizing database performance through 
           indexing and query optimization techniques.
           </li>
        <li>MongoDB: Proficient in MongoDB NoSQL database for data storage 
           and retrieval. Experienced in designing schema-less databases, 
           performing CRUD operations, and utilizing MongoDB aggregation 
           framework for complex queries.
           </li>
   </ul>

</div>

   {/* <a href={ResumePDF} download className="nav-link">Download Resume</a> */}
   {/* <p>
       If you have any further questions, please feel free to <Link to="/contact" className="nav-link">contact me</Link>.
       
   </p> */}
   </div>
   </Typography>
</CardContent>

       
        </CardContent>
    </div>
  </CardContent>
        </Card>
        </Box>
)
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
