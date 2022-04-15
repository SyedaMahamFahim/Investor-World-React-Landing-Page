import React from 'react'
import useStyles from './NavbarStyle'
import NavbarMenuList from './NavbarMenuList';
import NavbarData from '../../StaticData/NavbarData'
import ColoredBtn from '../Buttons/ColoredBtn';
import { AppBar, Box, List,Toolbar} from '@mui/material';
import Drawer from './Drawer';
import Logo from '../Logo/Logo';


const Navbar = () => {
    const classes = useStyles();
    return (
        <>

            <AppBar position="static" className={classes.navbar} >
                <Toolbar className={classes.navbar__container}>
                    <Box className={classes.navbar__rightside}>
                      
                        <Logo/>
                    </Box>
                    <Box className={classes.navbar__leftside}>
                        <List className={classes.navbar__menu_ul}>
                            {
                                NavbarData.map((val, index) => <NavbarMenuList
                                    context={val} key={`${index}_${val.text}`} index={index} />)
                            }
                        </List>
                        <ColoredBtn context={"Students Portal"} />
                    </Box>
                    <Box className={classes.navbar__mobile_menu}>
                       <Drawer/>
                    </Box>
                </Toolbar>

            </AppBar>
        </>
    )
}


export default Navbar