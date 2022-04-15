import React from 'react'
import { Container, Box } from '@mui/material'
import { makeStyles } from "@mui/styles";
import { Navigation } from '@mui/icons-material';
import { animateScroll } from 'react-scroll'

const SectionWrap = (Component, isSectionBgColor, sectionId) => function HOC() {
    const scrollTop = animateScroll;

    function scrollToTop() {
        scrollTop.scrollToTop();
    }

    const useStyles = makeStyles((theme) => ({
        sectionWrap__scroll_to_top: {
            display: "flex",
            alignItems: "center",
            alignContent: "flex-end",
            justifyContent: "flex-end",
            marginBottom: "10px",
            position: "relative",
            bottom: "6rem",
            cursor:"pointer",
            [theme.breakpoints.between('xs', 'md')]: {
                position: "relative",
                bottom: "2rem",
                marginBottom: "5px",
            },
        },
        sectionWrap__scroll_to_top_icon: {
            padding: "20px",
            background: theme.allColors.pinkColorPrimary,
            borderRadius: "100%",
            color: theme.allColors.smokeWhiteStokeColor,
            transition: "all 0.7s ease",
            boxShadow: "2px -1px 13px 10px rgb(133 22 22 / 13%)",

            '&:hover': {
                transform: "scale(1.05)",
            },

        }

    }))
    const classes = useStyles()
    return (
        <>
            <Container
                sx={{
                    margin: "0",
                    maxWidth: "100% !important",
                    backgroundColor: isSectionBgColor ? "#EDF2F8 !important" : "white !important"
                }}
                id={sectionId}
            >
                <Component />
                <Box
                    
                    className={classes.sectionWrap__scroll_to_top}
                >
                    <Navigation
                    onClick={scrollToTop}
                        className={classes.sectionWrap__scroll_to_top_icon}
                    />

                </Box>
            </Container>

        </>
    )
}

export default SectionWrap