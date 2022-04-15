import React from 'react'
import SectionWrap from '../../Wrapper/SectionWrap/SectionWrap';
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { Container, Box } from '@mui/material';
import ContentComponent from '../../components/ContentComponent/ContentComponent';
import ColoredBtn from '../../components/Buttons/ColoredBtn'
import OurGoalsImg from '../../assests/OurGoals.png'
import MotionWrap from '../../Wrapper/MotionWrap/MotionWrap';


import useStyles from './OurGoalsStyle'
import ImageComponent from '../../components/ImageComponent/ImageComponent';

const OurGoals = () => {
    const classes = useStyles()

    return (
        <>
            <SectionHeader title={"Our Goals"} desc={"Our goal is to make your dream come true"} />

            <Container className={classes.ourgoals}>
                <Box className={classes.ourgoals__content}>
                    <ContentComponent />
                    <Box className={classes.ourgoals__btn}>
                        <ColoredBtn context={"Join Us"} />
                    </Box>
                </Box>
                <Box className={classes.ourgoals__video}>
                    <ImageComponent
                    fileUrl={OurGoalsImg }
                    altTag={"OurGoals"}
                    imgWidth={"643px"}
                    imgHeight={"450px"}/>
                </Box>

            </Container>

        </>
    )
}

export default SectionWrap(
    MotionWrap(OurGoals),
    false,
    "goals"
  );