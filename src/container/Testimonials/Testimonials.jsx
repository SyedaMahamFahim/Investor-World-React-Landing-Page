import React, { useState } from 'react'
import { Box, Container } from '@mui/material';
import useStyles from './TestimonialsStyle'
import SectionWrap from '../../Wrapper/SectionWrap/SectionWrap';
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import TestimonialBox from '../../components/TestimonialBox/TestimonialBox'
import { ChevronRightSharp, ChevronLeftSharp } from '@mui/icons-material';
import TestimonialsData from '../../StaticData/TestimonialsData'
import MotionWrap from '../../Wrapper/MotionWrap/MotionWrap';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (index) => {
    setCurrentIndex(index);
    console.log('current index', index)
  };
  const testimonials = TestimonialsData

  const classes = useStyles()
  return (
    <>
      <Container className={`${classes.testimonials} center-div-slide`}>
        <SectionHeader title={"Testimonials"} desc={"Satisfied clients make us happy"} />

        <Box className={classes.testimonials__box} >
          <TestimonialBox
            name={testimonials[currentIndex].name} 
            imgUrl={testimonials[currentIndex].img}
            position={testimonials[currentIndex].position}
            company={testimonials[currentIndex].company}
            feedback={testimonials[currentIndex].feedback}
            />
          <Box className={classes.testimonials__arrows} >
            <Box onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <ChevronLeftSharp className={classes.testimonials__both_arrows} />
            </Box>
            <Box onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <ChevronRightSharp className={classes.testimonials__both_arrows} />
            </Box>
          </Box>
        </Box>
      </Container>


    </>
  )
}


export default SectionWrap(
  MotionWrap(Testimonials),
  false,
  "testimonials"
);