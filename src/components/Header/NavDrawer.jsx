import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactMail';
import PortfolioIcon from '@mui/icons-material/Work';
import ResumeIcon from '@mui/icons-material/Description';
import HamburgerNav from '../../assets/images/hamburgermenu.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Home from '../Pages/Home';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    zIndex: 2000,
    '@media (max-width: 600px)': {
      justifyContent: 'flex-end',
      zIndex: 4000,
    },
  },


}));


export default function TemporaryDrawer({ className }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const iconMap = {
    Home: <HomeIcon />,
    About: <AboutIcon />,
    Contact: <ContactIcon />,
    Portfolio: <PortfolioIcon />,
    Resume: <ResumeIcon />,
  }

  const DrawerList = (
    <Box className={classes.nav} sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* <List>
        {['Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/">
            <ListItemButton>
              <ListItemIcon>
              <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <List>
        {['Home', 'About', 'Contact', 'Portfolio', 'Resume'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to={`/${text.toLowerCase()}`}>
            <ListItemButton>
              <ListItemIcon>
                {iconMap[text]}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={className}>
      <Button onClick={toggleDrawer(true)} sx={{
    backgroundColor: 'primary.main', 
    color: 'white',
    '&:hover': {
      backgroundColor: 'primary.dark', 
    }
  }}><img src={HamburgerNav} width='30' height='30'/></Button>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': { 
            backgroundColor: 'rgba(126, 189, 194, 0.4)',
            color: 'white',
        }
      }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

