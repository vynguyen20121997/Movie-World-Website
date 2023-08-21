import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Navbar() {
    //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    //     React.useState<null | HTMLElement>(null);

    //   const isMenuOpen = Boolean(anchorEl);
    //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    //   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    //   };

    //   const handleMobileMenuClose = () => {
    //     setMobileMoreAnchorEl(null);
    //   };

    //   const handleMenuClose = () => {
    //     setAnchorEl(null);
    //     handleMobileMenuClose();
    //   };


    //   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    //   };

    //   const menuId = 'primary-search-account-menu';
    //   const renderMenu = (
    //     <Menu
    //       anchorEl={anchorEl}
    //       anchorOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //       }}
    //       id={menuId}
    //       keepMounted
    //       transformOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //       }}
    //       open={isMenuOpen}
    //       onClose={handleMenuClose}
    //     >
    //       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    //   );

    //   const mobileMenuId = 'primary-search-account-menu-mobile';
    //   const renderMobileMenu = (
    //     <Menu
    //       anchorEl={mobileMoreAnchorEl}
    //       anchorOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //       }}
    //       id={mobileMenuId}
    //       keepMounted
    //       transformOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //       }}
    //       open={isMobileMenuOpen}
    //       onClose={handleMobileMenuClose}
    // //     >
    //       <MenuItem>
    //         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    //           <Badge badgeContent={4} color="error">
    //             <MailIcon />
    //           </Badge>
    //         </IconButton>
    //         <p>Messages</p>
    //       </MenuItem>
    //       <MenuItem>
    //         <IconButton
    //           size="large"
    //           aria-label="show 17 new notifications"
    //           color="inherit"
    //         >
    //           <Badge badgeContent={17} color="error">
    //             <NotificationsIcon />
    //           </Badge>
    //         </IconButton>
    //         <p>Notifications</p>
    //       </MenuItem>
    //       <MenuItem onClick={handleProfileMenuOpen}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="primary-search-account-menu"
    //           aria-haspopup="true"
    //           color="inherit"
    //         >
    //           <AccountCircle />
    //         </IconButton>
    //         <p>Profile</p>
    //       </MenuItem>
    //     </Menu>
    //   );

    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>

            <div style={{ display: "flex", border: "0", margin: "0" }}>
                <img width="70px" src="https://i.ibb.co/K9NfKFW/wired-gradient-62-film.png" alt="wired-gradient-62-film" border="0" />
                <Link to="/"><Button><h3>MOVIE WORLD</h3></Button></Link>
            </div>

            <div style={{ display: "flex", border: "0", margin: "0" }}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button >HOME</Button>
                    <Button>MOVIES</Button>
                    <Button>TV SHOWS</Button>
                </ButtonGroup>
            </div>

            <div >

                {/* <Button> <AccountCircle /></Button>
                    <Button>  <MenuIcon /></Button> */}


                <IconButton style={{ marginRight: "1px" }}
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    //   aria-controls={menuId}
                    aria-haspopup="true"
                    //   onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle  fontSize="inherit"/>
                </IconButton>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon fontSize="inherit"/>
                </IconButton>
            </div>
            {/* <div className='mobie' >
            <IconButton
              size="large"
              aria-label="show more"
            //   aria-controls={mobileMenuId}
              aria-haspopup="true"
            //   onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}

            {/* {renderMobileMenu}
      {renderMenu} */}
        </div>
    );
}
