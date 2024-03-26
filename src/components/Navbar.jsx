import { React, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import notification from "../assets/images/IconIndicator.png";
import calender from "../assets/images/calendar.png"
import avatar from "../assets/images/Avatar.png"
import appicon from "../assets/images/app-icon.png"

const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: "6px",
      border: "1px solid rgba(234, 236, 240, 1)",
      backgroundColor: "white",
      '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "rgba(157, 159, 161, 1)",
      fontFamily: "Inter , sans-serif",
      fontSize: "14px",
      borderColor: "black",
      '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
      },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
}));

export default function Navbar() {
      const [anchorEl, setAnchorEl] = useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      const handleMobileMenuClose = () => {
            setMobileMoreAnchorEl(null);
      };

      const handleMenuClose = () => {
            setAnchorEl(null);
            handleMobileMenuClose();
      };

      const handleMobileMenuOpen = (event) => {
            setMobileMoreAnchorEl(event.currentTarget);
      };

      const menuId = 'primary-search-account-menu';
      const renderMenu = (
            <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                  }}
                  id={menuId}
                  keepMounted
                  transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                  }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
            >
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
      );

      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
            <Menu
                  anchorEl={mobileMoreAnchorEl}
                  anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                  }}
                  id={mobileMenuId}
                  keepMounted
                  transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                  }}
                  open={isMobileMenuOpen}
                  onClose={handleMobileMenuClose}
            >
                  <MenuItem>
                        <IconButton size="small" color="inherit" sx={{ marginRight: 1 }}>
                              <img src={notification} alt="notificationicon" />
                        </IconButton>
                        <p>Notifications</p>
                  </MenuItem>
                  <MenuItem>
                        <IconButton
                              size="small"
                              color="inherit"
                              sx={{ marginRight: 1 }}
                        >
                              <img src={calender} alt="calendericon" />

                        </IconButton>
                        <p>Events</p>
                  </MenuItem>
                  <MenuItem>
                        <IconButton
                              size="small"
                              color="inherit"
                              sx={{ marginRight: 1 }}
                        >
                              <img src={appicon} alt="appicon" />
                        </IconButton>
                        <p>Menu</p>
                  </MenuItem>
            </Menu>
      );

      const drawerWidth = 240

      return (
            <Box >
                  <AppBar position="fixed" sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        backgroundColor: 'white',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>
                        <Toolbar>
                              <Search>
                                    <SearchIconWrapper>
                                          <SearchIcon sx={{ color: "rgba(40,40,40,1)", fontSize: 22 }} />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                          placeholder="Search…"
                                          inputProps={{ 'aria-label': 'search' }}

                                    />
                              </Search>
                              <Box sx={{ flexGrow: 1 }} />
                              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <IconButton size="large" color="inherit">
                                          <img src={notification} alt="notificationicon" />
                                    </IconButton>
                                    <IconButton
                                          size="large"
                                          color="inherit"
                                    >
                                          <img src={calender} alt="calendericon" />
                                    </IconButton>
                                    <IconButton
                                          size="large"
                                          edge="end"
                                          color="inherit"

                                          sx={{ marginRight: 0.5 }}
                                    >
                                          <img src={appicon} alt="appicon" />
                                    </IconButton>
                              </Box>
                              <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                    <IconButton
                                          size="large"
                                          aria-label="show more"
                                          onClick={handleMobileMenuOpen}
                                          color="inherit"
                                    >
                                          <img src={avatar} alt="avatar" />

                                    </IconButton>
                              </Box>
                        </Toolbar>
                  </AppBar>
                  {renderMobileMenu}
                  {renderMenu}
            </Box>
      );
}
