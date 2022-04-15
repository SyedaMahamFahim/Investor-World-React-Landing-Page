import React from 'react'
import useStyles from './HeaderStyle'
import { Box, Typography } from '@mui/material'
import Searching from '../../assests/Searching.png'
import ColoredBtn from '../Buttons/ColoredBtn'

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.header__container} >

                <Box className={`${classes.header__left_side} `}>
                    <Typography variant='h1' className={classes.header__left_side_h1}>
                        Are Looking for an invester for Your
                        <Typography variant='h1' component="span" className={classes.header__left_side_span}> Project?</Typography>
                    </Typography>

                    <Typography variant='p' className={classes.header__left_side_p}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, illum nobis veritatis sequi aut, in facere, neque repudiandae sunt aspernatur molestiae sed ducimus? Rem reprehenderit error, dolor quisquam nulla totam.
                    </Typography>
                    <Box className={classes.header__left_side_btn}>
                        <ColoredBtn context={"Join Us"} />
                    </Box>

                </Box>
                <Box className={classes.header__right_side}>
                    <Box
                        component="img"
                        className={classes.header__right_side_img}
                        alt="Searching for an invester"
                        src={Searching}
                    />
                </Box>
            </Box>

        </>
    )
}

export default Header