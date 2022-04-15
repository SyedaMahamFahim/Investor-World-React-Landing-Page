import React, { useState } from 'react'
import NavbarData from '../../StaticData/NavbarData'
import useStyles from './NavbarStyle'
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';
import { SwipeableDrawer } from '@mui/material';
import { MenuRounded, CloseRounded } from '@mui/icons-material';
import ColoredBtn from '../Buttons/ColoredBtn';
import SocialMedia from '../SocialMedia/SocialMedia';
import CopyRight from '../Footer/CopyRight';

const Drawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className={classes.navbar__drawer_close_icon}>
        <CloseRounded />
      </Box>

      <List>
        {NavbarData.map((val, index) => (
          <ListItem button key={val.text + index}>
            <ListItemText primary={val.text} />
          </ListItem>
        ))}
      </List>

      <Box className={classes.navbar__drawer_btn}>
        <ColoredBtn context={"Students Portal"} />

      </Box>

      <Box >
        <SocialMedia />
      </Box>

<Box>
  <CopyRight/>
</Box>
    </Box>
  );

  return (
    <>


      <Box  >
        <Button onClick={toggleDrawer("right", true)}>
          <MenuRounded className={classes.navbar__drawer_bar_icon} />
        </Button>

        <SwipeableDrawer
          PaperProps={{
            sx: { width: "50%" },
          }}
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </Box>
    </>
  )
}

export default Drawer