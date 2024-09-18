import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import AboutMe from './components/Pages/AboutMe'
import Contact from './components/Pages/Contact'
import Portfolio from './components/Pages/Portfolio'
import Resume from './components/Pages/Resume'
import NameHeader from './components/Header/NameHeader'
import Window from './components/Pages/Window'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react';





const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(247, 233, 186, .6)'
    },
    secondary: {
      main: 'rgba(247, 233, 186, .6)'
    }
  }
})

function App() {
  return(
    
    <ThemeProvider theme={theme}>
      <Global styles={css`body{
        background-color: ${theme.palette.primary.main};
      }`}/>
 
 <Router>
        <NameHeader />
        <div style={{ display: 'flex' }}>
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
