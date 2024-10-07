
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    styledNav: {
        // right: 0,
        // top: -10,
        // position: 'absolute',
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: 3,
        '@media (max-width: 600px)': {
            flexDirection: 'column',
        },
    },
    styledLink: {
        padding: '4px',
        position: "relative",
        // margin: '20px 0 0 8px',
        textDecoration: 'none',
        color: 'black',
        fontSize: '1rem',
        '&:hover': {
            color: '#7EBDC2',
        },
      
    },


}));



export default function NavCard() {
    const classes = useStyles();
    
    return (
        <nav className={classes.styledNav}>
            <Link className={classes.styledLink} to="/">Home</Link>
            <Link className={classes.styledLink} to="/about">About</Link>
            <Link className={classes.styledLink} to="/contact">Contact</Link>
            <Link className={classes.styledLink} to="/portfolio">Portfolio</Link>
            <Link className={classes.styledLink} to="/resume">Resume</Link>
        </nav>
    )
}