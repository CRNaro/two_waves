import { Card, CardContent, CardMedia, Button, Typography, Box, Link, Grid, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: { 
        backgroundColor: '#0d1f22',
        padding: '1rem 0',
        marginTop: 'auto',
    },
    footerText: {
        display: 'flex',
        justifyContent: 'center',
        color: '#415A77',
        fontSize: '1rem',
        position: 'relative',
        '@media (max-width: 600px)': {
            fontSize: '1rem',
        },
    },

}));


export default function Footer() {
    const classes = useStyles();

    return (
        <div>
          
                    <Typography variant="h5" component="div">
                        <Box className={classes.footerText}>
                            Made with love by Christopher Naro
                           </Box>
                    </Typography>
             
        </div>
    )
}