import React from 'react'
import { Button } from '@mui/material';
import useStyles from './ButtonStyle';

const WhiteBtn = ({ context }) => {
    const classes = useStyles()

    return (
        <>
           

                <Button  className={classes.whiteBtn}>

                    {context}

                </Button>
          
        </>
    )
}

export default WhiteBtn