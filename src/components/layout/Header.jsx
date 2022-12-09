import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';

const drawerWidth = 240;
const navItems = ['Home', 'Search', 'Favorites'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Read your Heart
      </Typography>
      <Divider />

      {/* this is for the small screen nav bar */}
      <List>
        <Link href="/" underline="none" >
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
            
        </Link>
        <Link href="/search" underline="none" >
        <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Book Search"} />
            </ListItemButton>
        </Link>
        <Link href="/favorites" underline="none" >
        <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={"Favorites"} />
            </ListItemButton>
        </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" style={{ background: '#d5bdaf'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Read Your Heart
          </Typography>
          <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button component={ReactRouterLink} to="/" key={"Home"} sx={{ color: '#fff' }}>
                {"Home"}
            </Button>
            <Button component={ReactRouterLink} to="/search" key={"BookSearch"} sx={{ color: '#fff' }}>
                {"Book Search"}
            </Button>
            <Button component={ReactRouterLink} to="/favorites" key={"favorites"} sx={{ color: '#fff' }}>
                {"Favorites"}
            </Button>
            
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;


