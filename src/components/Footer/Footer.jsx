import React from 'react'
import useStyles from './FooterStyle'
import NavbarMenuList from '../Navbar/NavbarMenuList';
import { Container,List, Box,Typography } from '@mui/material';
import FooterData from '../../StaticData/FooterData'
import Logo from '../Logo/Logo';
const Footer = () => {

  const classes = useStyles()
  return (
    <>
      <Container className={classes.footer}>
        <Box className={classes.footer__box}>
          <Box className={classes.footer__box_logo}>
            <Logo />

          </Box>
          <Box className={classes.footer__box_footer_menu}>
          <List className={classes.footer__box_footer_menu_ul}>
            {
              FooterData.map((val, index) => <NavbarMenuList
                context={val} key={`${index}_${val.title}`} index={index} />)
            }
             </List>
          </Box>
        </Box>
        <Typography variant='p' className={classes.logo}  >
        © 2022 All right reserved - Design & Developed by 

        <a href="https://syedamahamfahim.netlify.app/" target="_blank" rel="noreferrer"> Syeda Maham Fahim</a>

            </Typography>
      </Container>
     

    </>
  )
}

export default Footer