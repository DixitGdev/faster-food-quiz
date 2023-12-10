import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/admin/payment" onClick={handleDrawerToggle}>
          <ListItemText primary="Payment" />
        </ListItem>
        <ListItem button component={Link} to="/admin/salesperson" onClick={handleDrawerToggle}>
          <ListItemText primary="Salesperson" />
        </ListItem>
        <ListItem button component={Link} to="/admin/business" onClick={handleDrawerToggle}>
          <ListItemText primary="Business" />
        </ListItem>
        <ListItem button component={Link} to="/admin/signout" onClick={handleDrawerToggle}>
          <ListItemText primary="Signout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" style={{
        backgroundColor: "#f98169"
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography component={Link} to='/admin' sx={{flexFlow:1, textAlign:'center', textDecoration: 'none', color: "white"}}>Oasis Hub</Typography>
          <Box flexGrow={1}/>
          <Avatar alt='userName' src='../assets/userAvatar/2.jpg'/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        {drawer}
      </Drawer>
    </div>
  );
}

export default NavBar;
