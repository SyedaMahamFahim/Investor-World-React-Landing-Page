import React, { useState } from 'react'
import { Box, Button, Backdrop, SpeedDial, SpeedDialIcon } from '@mui/material'
import ImageComponent from '../ImageComponent/ImageComponent'
import OurGoals from '../../assests/OurGoals.png'
import useStyles from './VideoComponentStyle'
import EditIcon from '@mui/icons-material/Edit';

const VideoComponent = () => {

  const classes = useStyles()

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.videoComponent}>



        <ImageComponent
          fileUrl={OurGoals}
          altTag={"Play now"}
          imgWidth={"100%"}
          imgHeight={"45rem"}
        />


        <SpeedDial
        onClick={handleToggle}
          ariaLabel="Youtube Video"
          className={classes.videoComponent__speedDial}
          
          icon={<EditIcon openIcon={<EditIcon />} />}
        >
         maham
        </SpeedDial>


     

        <Box>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            Maham
          </Backdrop>
        </Box>
      </Box>
    </>
  )
}

export default VideoComponent