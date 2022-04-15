import React from 'react'
import useStyles from './BlogBoxStyle'
import { Card, CardMedia, CardContent, CardActions, Typography, Container } from '@mui/material';
import ColoredBtn from '../Buttons/ColoredBtn';

const BlogBox = ({imgUrl,title,desc}) => {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.blogBox}>
                <Card
                    className={classes.blogBox_box}
                >

                    <CardMedia
                        component="img"
                        height="194"
                        image={imgUrl}
                        alt={title}
                    />
                    <CardContent>
                        <Typography variant="p" >
                            {desc}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.blogBox__cardAction}>
                        <ColoredBtn context={"Read More"} />

                    </CardActions>

                </Card>
            </Container>
        </>
    )
}

export default BlogBox