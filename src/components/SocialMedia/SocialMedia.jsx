import React from 'react'
import { Link } from "react-router-dom";
import SocialMediaData from '../../StaticData/SocialMediaData'
import { makeStyles } from "@mui/styles";
import { Box, List, ListItem, ListItemText } from '@mui/material';


const SocialMedia = () => {
    const useStyles = makeStyles(() => ({
        social_media: {
            margin: "12px"
        },
        social_media_ul:{
            display: "flex !important",
            alignItems: "center",
            alignContent: "center",
        }
    }))

    const classes = useStyles()
    return (
        <>
            <Box className={classes.social_media}>
                <List className={classes.social_media_ul}>
                    {
                        SocialMediaData.map((val, index) => {
                            return (
                                <>
                                    <SocialMediaList context={val} key={`key_${val.icon+index}`}/>
                                </>
                            )
                        })
                    }

                </List>
            </Box>
        </>
    )
}

const SocialMediaList = ({ context }) => {
    const useStyles = makeStyles((theme) => ({
        social_media_icon: {
            color: theme.palette.secondary.light,
            fontSize:"2rem !important"
        },
        social_media_li:{
            padding:"0 !important"
        }
    }))

    const classes = useStyles()
    return (
        <>
            <ListItem className={classes.social_media_li}>
                <Link to={context.url}>
                    <ListItemText >
                        <context.icon className={classes.social_media_icon}/>
                    </ListItemText>
                </Link>

            </ListItem>
        </>
    )
}
export default SocialMedia