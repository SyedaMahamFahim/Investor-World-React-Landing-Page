import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import useStyles from './TestimonialBoxStyle'

const TestimonialBox = ({ imgUrl, name ,position,company,feedback}) => {
  const classes = useStyles()

  return (
    <>

      <Container className={classes.testimonialBox}>
        <Box className={classes.testimonialBox__profile}>

          <Box
            component="img"
            alt={name}
            src={imgUrl}
            className={classes.testimonialBox__profile_img}
          />

          
        </Box>


        <Box className={classes.testimonialBox__content}>
          <Typography variant='p' className={classes.testimonialBox__content_feedback}>
            {feedback}
          </Typography>
          <Box className={classes.testimonialBox__content_info}>
            <Typography variant='p' className={classes.testimonialBox__content_info_name}>
              {name}
            </Typography>
            <Typography variant='p' className={classes.testimonialBox__content_info_position}>
              {position}
            </Typography>
            <Typography variant='p' className={classes.testimonialBox__content_info_company}>
             {company}
            </Typography>
          </Box>
        </Box>

      </Container>

    </>
  )
}

export default TestimonialBox