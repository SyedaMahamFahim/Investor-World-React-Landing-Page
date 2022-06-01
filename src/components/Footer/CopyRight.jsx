import React from 'react'
import useStyles from './FooterStyle'
import { Box, Typography } from '@mui/material';

const CopyRight = () => {
    
    const classes = useStyles()
    return (
        <>
            <Box className={classes.footer__copyright}>
                <Typography variant="h6" className={classes.footer__copyright_h6}>
                    @2022 PWA ALL RIGHTS RESERVED
                </Typography>
                <Typography variant="p" className={classes.footer__copyright_h6} >
                    Developed By Syeda Maham Fahim
                </Typography>
            </Box>

        </>
    )
}

export default CopyRight