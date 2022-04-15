import React from 'react'
import useStyles from './NavbarStyle'
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-scroll'

const NavbarMenuList = ({ context }) => {
    const classes = useStyles();
    return (

        <>

            <ListItem className={classes.navbar__menu_li}>
               

                <Link activeClass="active" to={context.url} spy={true} smooth={true}>

                    <ListItemText primary={context.text} className={classes.navbar__menu_ul_li_text} />

                </Link>

            </ListItem>

        </>
    )
}

export default NavbarMenuList