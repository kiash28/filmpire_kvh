import React, {useState} from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import useStyles from './styles';
import Sidebar from '../Sidebar/Sidebar';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
      	  {isMobile && (
            <IconButton
              color='inherit'
              edge='start'
              style={{outline: 'none'}}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color='inherit' sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7/> : <Brightness4/>}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) 
            :
            (
              <Button color="inherit" component={Link} to={`/profile/:id`} className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>My movies &nbsp;</>}
                <Avatar 
                  style={{width: 30, height: 30}}
                  alt="profile"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACUCAMAAAC6AgsRAAAAOVBMVEWVu9////+QuN6Mtt35+/2Hs9zn7/efweL1+PzJ2+7d6PSZveDs8vmqyOWvy+akxOPQ4PC90+q20Ol6tGbPAAAEs0lEQVR4nO2c65KjIBCFsRGQq+j7P+xi3GzMjEZotLW28lXNj0nV1pxt6KaBExj78uXLyQBwsKrvvfd9r2z6Da6WtIALNUQjXdd1bfpx0sRBCX61rBmwPrbNb9ro7fVB5FbLFXEzLtprgwigu011E52+ciLC+FndQ+F4mUARd9VNRHGJOrAuS16ahlfkCbBceUkgoxeYHb05gtTyYLuqrCGJ5QldJK9pNGmSQCiU1zSBdAqWje4E5QjDUCyvaQa6AIq1fmCPlmwGwoiQ1zRkCx2UlL4XjkgfeMzwpgH2NAKhtPY90UQBLC8uM1QlBimvaUjUgUfrI5mA6OlHNAG5QeszFLslgat+E45iCeH7e6ItOpLdZoU+CnmqQp+i0Idb3SZaCn19hb7+q+/2+u6eH3evL3evz6JCH8n6dvP+gOed+q0RKfQhd5cTNDvMHq2Povyxu+8/WMHB6TuORh5gE9h89+cPfdgEpjogQnYINN1BguMOOCTZ+RpuAlIdD6UBRumjGt7UwqD00d0wAKZFiIQXDJgjLE8n7+73H5gMpsveB6WbzJb2BrO4iSZpnReUlkC64jdTOAOJZx8rbBLIWoMXRQGkD19KkQJ/xBUuovxrOKqLtx/w3Fvq4SITVuZJB8mpxjo5As1l6hhkCDQXeIcKBF4qL8E/l8ErCt+s6/mH+QcPYDc+UwNIcwRAxX/t+qaHcuGdhBgVmZESuDft0nbIlf69ljit/sVsMjK2xnMChcAgyHnhWGx4wPZxGcQu9gtP4t/tVCsDnJstwG1YeInfcpML8KOeGD0svc/LHG9jsKdFEYSP7+Mo1dvfgifLD7l630u56MUJCgH8WiXROwMGbPVf+aOThYeNQiyHD9EAMWxsRE04suCA/bBMuMBWo5E+DB9aRHOcqZcPn3t5pwP7MetTPQ4rRWdJd1TbldHntc6MVgg+I4QdjNvvXo8RmG+WbJ00xsgMZU+BBwwxVPgNdv9Dql4g0oyYR71lscJtlUN1/2Xxt705dJXHRjvtZz26LocrLvPzqLvyRxmxy6iqMeirwHyqLg0rvC651BxtVVzl51Nxa4i65yil4l6En7e0vWgrMphAXoUrgaC6TKArTIVTqAT0+RvyHroUidVHUP0msBUQAkX6pgRGfrWLKD3QCXJya/oC26TSpC/+hPrMnccSpC/LEslrGlyTj3ORYEAVGJLmagbVYp2+NXqB2iQRrb4TqBW4wudcCsoXDTSr20SLmX8nngv90odIYMRXuPEgOgTC8oIqMGTdwQSiQyAsf6gCSLL3fYLYAxMcvbzAHMKQ6iuXh/6WNAaEedGS6ivvAIveT6kF8f6KItVXvsDdXd/d8+P29Rn/NahyMPdw4Kka6A7nDwS183jZQeo0+hYT2NPrchatDFWWGBBqMGdFsTODqveaAFPjGb2CGdVRbiLgotfyuILtpO7FsT4i4KDCEUOdBjUoOMXk9LAuhSg75Ps+nYyB/fQ/HS6SC9YP2sgif7s0eujZwWO6rTGFwKo+6Izx7owOvbLs5LCtMllxmB91NEZK93hetH08MOqkNCbq0TNBFbNNUmB40mD/Ps86P9Ca4pU+vNUjrV++/H/8Adf6PZqqJcuwAAAAAElFTkSuQmCC"
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search...'}
        </Toolbar>
      </AppBar>
      <div>
      <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
        </div>
    </>
  )
}

export default NavBar;