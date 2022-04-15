import React from 'react'
import useStyles from './OurServicesStyle'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import ServicesBox from '../../components/ServicesBox/ServicesBox';
import SectionWrap from '../../Wrapper/SectionWrap/SectionWrap';
import { Container,Box } from '@mui/material';
import MotionWrap from '../../Wrapper/MotionWrap/MotionWrap';

const OurServices = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.ourservices}>
        <SectionHeader title={"Services"} desc={"Our service that will make your dreamc come true" } />
        <Box className={classes.ourservices__box}>
          <ServicesBox />
          
        </Box>
      </Container>
    </>
  )
}


export default SectionWrap(
  MotionWrap(OurServices),
  true,
  "services"
);