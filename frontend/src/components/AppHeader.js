import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



function AppHeader() {

  const navigate = useNavigate();

  const handleBackClick = (event) => {
    navigate(-1);
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'Arial',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            AnilistFetcher
          </Typography>
          <ArrowBack sx={{flexGrow: 0}} onClick={handleBackClick}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;