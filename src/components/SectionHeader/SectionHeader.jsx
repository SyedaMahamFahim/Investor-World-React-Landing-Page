import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';
const SectionHeader = ({ title, desc }) => {
    const useStyles = makeStyles((theme) => ({
        section__header: {
            padding: "5% 0% 2% 0%",

        },
        section__header_h1: {
            fontSize: "7rem !important",
            marginLeft: "-4% !important",
            textStroke: `2px ${theme.allColors.smokeWhitePrimary}`,
            color: theme.allColors.lightPurpleStokeColor,

            [theme.breakpoints.between('xs', 'sm')]: {
                fontSize: "2.5rem !important",

            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize:"4rem !important",
                
            },

        },
    
        section__header_h4: {
        textAlign: "center",
        padding: "2rem",
        color: theme.allColors.lightBlackColor,
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem !important",
            padding: "1rem",
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: "1rem !important",
            padding: "1rem",
        },
    }
    }))

const classes = useStyles()
return (
    <>
        <Box className={classes.section__header}>
            <Typography variant="h1" className={classes.section__header_h1}>
                {title}
            </Typography>

            <Typography variant="h4" className={classes.section__header_h4}>
                {desc}
            </Typography>


        </Box>
    </>
)
}

export default SectionHeader