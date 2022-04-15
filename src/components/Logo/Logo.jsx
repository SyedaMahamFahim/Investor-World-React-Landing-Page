import React from 'react'
import { makeStyles } from "@mui/styles";
import { Typography } from '@mui/material';

const Logo = () => {
    const useStyles = makeStyles((theme) => ({
        logo: {
            color: `${theme.allColors.pinkColorPrimary} !important`,
            ...theme.typography.h2,
        }
    }))
    const classes = useStyles()
    return (
        <>
            <Typography variant='h2' className={classes.logo}  >
                U-Tech
            </Typography></>
    )
}

export default Logo