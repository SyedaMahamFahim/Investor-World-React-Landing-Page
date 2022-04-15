import React from 'react'
import { Container } from '@mui/material'
import { makeStyles } from "@mui/styles";


const Section = ({ isSectionBgColor, Component }) => {
    const useStyles = makeStyles(() => ({
        bgSectionColor: {
            margin: "12px"
        },
        bgSmokeWhite: {
            display: "flex !important",
            alignItems: "center",
            alignContent: "center",
        }
    }))

    const classes = useStyles()
    return (
        <>
            <Container className={isSectionBgColor ? `${classes.bgSectionColor}` : `${classes.bgSmokeWhite}`}>
                <Component />
            </Container>
        </>
    )
}

export default Section