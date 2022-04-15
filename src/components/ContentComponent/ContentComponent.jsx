import React from 'react'
import useStyles from './ContentComponentStyle'
import { Box, List, ListItem, ListItemText, Typography, ListItemIcon, ListItemButton } from '@mui/material'
import { DoneAllRounded } from '@mui/icons-material';
import ContentComponentListData from '../../StaticData/ContentComponentListData';

const ContentComponent = () => {


    const classes = useStyles()
    return (
        <>
            <Box className={classes.contentComponent}>
                <Typography variant="h2" className={classes.contentComponent__title}>We will turn your idea in the successful business model framework</Typography>
                <Typography variant='p' className={classes.contentComponent__p}>Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</Typography>
                <Box className={classes.contentComponent_box} >
                    <List className={classes.contentComponent__ul}>
                        {
                            ContentComponentListData.map((context) =>
                             <ListWithIcon
                                key={`key_${context.id}`} 
                                context={context} 
                                />)
                        }
                    </List>
                </Box>

            </Box>

        </>
    )
}


const ListWithIcon = ({ context }) => {
    const classes = useStyles()
    return (
        <>
            <ListItem className={classes.contentComponent__li}>
                <ListItemButton className={classes.contentComponent__li_btn}>
                    <ListItemIcon >
                        <DoneAllRounded className={classes.contentComponent__li_btn_icon} />
                    </ListItemIcon>
                    <ListItemText primary={context.text} className={classes.contentComponent__li_p} />
                </ListItemButton>
            </ListItem>
        </>

    )
}

export default ContentComponent