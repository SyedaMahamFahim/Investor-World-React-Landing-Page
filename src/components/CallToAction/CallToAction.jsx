import React from 'react'
import { Container, Box, Typography } from '@mui/material';
import useStyles from './CallToActionStyle';
import WhiteBtn from '../Buttons/WhiteBtn';

const CallToAction = () => {
    const classes = useStyles()
    return (
        <>
            <Container className={classes.callToAction}>
                <Box className={classes.callToAction__container} >
                    <Box className={classes.callToAction__box}>
                        <Box className={classes.callToAction__box_title}>

                            <Typography variant="h4" className={classes.callToAction__box_title_h4} >
                                Hire the world’s best developers
                                and designers around!
                            </Typography>
                        </Box>
                        <Box className={classes.callToAction__box_btn}>
                            <WhiteBtn context={"Hire Developers"} />
                        </Box>
                    </Box>
                </Box>
        </Container>
        </>
    )
}

export default CallToAction