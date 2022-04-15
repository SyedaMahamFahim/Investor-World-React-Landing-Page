import React from 'react';
import useStyles from './ButtonStyle';
import {  Container } from '@mui/material';


const ViewMorebtn = ({url}) => {
    const classes = useStyles()

  return (
    <>
    
    <Container className={classes.viewMoreBtn}> 
        
            View More
         
    </Container> 
        </>
  )
}

export default ViewMorebtn