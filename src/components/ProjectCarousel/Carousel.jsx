import React, { useState } from 'react';
import { Paper, IconButton, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    carouselContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
        width: '100%',
    },
    carouselImage: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out',
    },
    fadeIn: {
        opacity: 1,
    },
    fadeOut: {
        opacity: 0,
    },
    navButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        zIndex: 1,
    },
    prevButton: {
        left: '15%',
    },
    nextButton: {
        right: '15%',
    },
}));

const Carousel = ({ images, alt, onImageClick }) => {
    const classes = useStyles();
    const [currentImage, setCurrentImage] = useState(0); 
    const [nextImage, setNextImage] = useState(1);
    const [fade, setFade] = useState(false); 

// Setting up for cross fade effect to be implimented later
    const nextPhoto = () => {
        setFade(true);
        setTimeout(() => {
          setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          setNextImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          setFade(false);
        }, 500);
      };

      const previousPhoto = () => {
        setFade(true);
        setTimeout(() => {
          setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          setNextImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          setFade(false);
        }, 500); 
      };
    return (
        <Paper className={classes.carouselContainer}>
            <Button className={`${classes.navButton} ${classes.prevButton}`} onClick={previousPhoto}>
                <ArrowBackIos className={classes.prevButton} />
            </Button>
              <img
          src={images[currentImage]}
          alt={alt}
          className={`${classes.carouselImage} ${fade ? classes.fadeOut : ''}`}
          onClick={() => onImageClick(images[currentImage])}
        />
        
            <Button className={`${classes.navButton} ${classes.nextButton}`} onClick={nextPhoto}>
                <ArrowForwardIos />
            </Button>
        </Paper>
    );


};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    alt: PropTypes.string.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

export default Carousel;

