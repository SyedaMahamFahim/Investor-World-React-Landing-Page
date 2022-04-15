import React from 'react';
import { Button} from '@mui/material';
import useStyles from './ButtonStyle';
import { Link } from 'react-router-dom';


const ColoredBtn = ({context}) => {

 

    const classes = useStyles()
    return (
        <>
        <Link to={"/"}>
            
        <Button variant="contained" className={classes.colorBtn}>
        
            {context}
           
            </Button>
            </Link>
        
        </>
    )
}

export default ColoredBtn