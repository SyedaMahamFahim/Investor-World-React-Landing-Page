import React from 'react'
import SectionWrap from '../../Wrapper/SectionWrap/SectionWrap';
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { Container, Box } from '@mui/material';
import ImageComponent from '../../components/ImageComponent/ImageComponent';
import ContentComponent from '../../components/ContentComponent/ContentComponent';
import useStyles from './AboutUsStyle'
import AboutUsImg from '../../assests/Components/ImageComponent/AboutUs.png'
import ColoredBtn from '../../components/Buttons/ColoredBtn'
import MotionWrap from '../../Wrapper/MotionWrap/MotionWrap';

const AboutUs = () => {
  const classes = useStyles()
  return (
    <>
      <SectionHeader title={"Who We Are"} desc={"Our goal is to make your dream come true"} />
      <Container className={classes.aboutus}>
        <Box className={classes.aboutus__img}>
          <ImageComponent fileUrl={AboutUsImg} altTag={"About Us"} imgWidth={"450px"}
            imgHeight={"450px"} />
        </Box>
        <Box className={classes.aboutus__content}>
          <ContentComponent />
          <Box className={classes.aboutus__btn}>
            <ColoredBtn context={"Join Us"} />
          </Box>
        </Box>

      </Container>

    </>
  )
}

export default SectionWrap(
  MotionWrap(AboutUs),
  false,
  "about"
);