import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Global, css } from '@emotion/react';
import Header from './components/Header/Header'


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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
