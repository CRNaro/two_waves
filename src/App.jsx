import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import AboutMe from './components/Pages/AboutMe'
import Contact from './components/Pages/Contact'
import Portfolio from './components/Pages/Portfolio'
import Resume from './components/Pages/Resume'
import DynamicNameHeader from './components/Header/DynamicNameHeader'
import Window from './components/Pages/Window'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react';
import { makeStyles } from '@mui/styles'; 
import { margin } from '@mui/system'

//GENERAL NOTES:
//TODO: Add a footer
//TODO: Make sure the site is responsive
//TODO: Make sure the site is accessible

//STYLING NOTES: 
// color palette: #0D1B2A, #1B263B, #415A77, #778DA9, #F7E9BA


const theme = createTheme({
  palette: {
    primary: {
      main: '#0d1f22'
    },
    secondary: {
      main: 'rgba(247, 233, 186, .6)'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2%',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      marginTop: '10%',
    },
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      marginTop: '10%',
    },
  },
  nameHeader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2%',
    '@media (max-width: 1200px)': {
      marginTop: '10%',
    },
    '@media (max-width: 900px)': {
      marginTop: '10%',
    },
  },


}));

function App() {
  const classes = useStyles();
  return(
    
    <ThemeProvider theme={theme}>
      <Global styles={css`body{
        background-color: ${theme.palette.primary.main};
      }`}/>
 
 <Router>
        <div className={classes.nameHeader}>
        <DynamicNameHeader />
        </div>
        <div className={classes.contentContainer} style={{ display: 'flex' }}>
        <Home />
      
        <Routes>
        
          <Route path="/" element={<Window />}>
          
            <Route path="about" element={<AboutMe />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
