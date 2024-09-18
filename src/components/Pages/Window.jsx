import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavCard from '../Header/NavCard';

const useStyles = makeStyles((theme) => ({
    // mainContent: {
    //     display: 'flex',
    //     height: '100vh',
    // },
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
        <Card>
          <CardContent>
            <Outlet />
          </CardContent>
        </Card>
      </Box>
        </div>
    );
}