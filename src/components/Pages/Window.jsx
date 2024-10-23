import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, Button, Typography, Box, Link, Grid, TextField } from "@mui/material";
import NavCard from '../Header/NavCard';


const useStyles = makeStyles((theme) => ({
    mainContent: {
        paddingTop: '5%',
        display: 'flex',
        height: '100vh',
    },
    // navCard: {
    //     backgroundColor: 'rgba(247, 233, 186, 1) !important',
    //     width: '25%',
    //     height: '100vh',
    // },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        
    },
}));

export default function Window() {
    const classes = useStyles();

    return (
        <div className={classes.mainContent}>
      {/* <Card className={classes.navCard}>
        <CardContent>
          <Typography variant="h5" component="div">
           
          </Typography>
        </CardContent>
      </Card> */}
      <Box className={classes.content}>
       
          <CardContent>
            <Outlet />
          </CardContent>
        
      </Box>
        </div>
    );
}