import React, { useState } from 'react'
import { Box, Container, Typography } from '@mui/material';
import useStyles from './ServicesBoxStyle'
import { Link } from 'react-router-dom';
import ServicesData from '../../StaticData/ServicesData';
import ImageComponent from '../ImageComponent/ImageComponent';
const ServicesBox = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.serviceBox}>
        {
          ServicesData.map((context) => <ServicesBoxContent
            key={context.id + context.title}
            context={context}
          />)
        }
      </Container>
    </>
  )
}

const ServicesBoxContent = ({ context }) => {
  const classes = useStyles()
  const [hover, setHover] = useState(false)

  const hoverEffect = () => {
    setHover(true)
  }
  const noHoverEffect = () => {
    setHover(false)

  }
  return (
    <>
      <Box className={classes.serviceBox__card}
        onMouseOver={hoverEffect}
        onMouseOut={noHoverEffect}
      >
        <Box className={classes.serviceBox__card_box}>
          <Box className={classes.serviceBox__card_box_img}>
            <ImageComponent fileUrl={context.img} altTag={context.title}
              imgWidth={"200px"} imgHeight={"200px"}
            />
          </Box>
          <Box className={classes.serviceBox__card_box_content}>
            <Typography variant='h3'
              className={`${hover ? classes.serviceBox__card_box_content_h3_hover : classes.serviceBox__card_box_content_h3}`}>
              {context.title}
            </Typography>
            <Box className={classes.serviceBox__card_btn}>
              <Link to="/"
                className={`${hover ? classes.serviceBox__card_btn_a_hover : classes.serviceBox__card_btn_a}`}
              >
                View More
              </Link>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default ServicesBox