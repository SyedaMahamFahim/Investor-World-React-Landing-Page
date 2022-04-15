import React from 'react'
import SectionWrap from '../../Wrapper/SectionWrap/SectionWrap';
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { Container } from '@mui/material';
import useStyles from './BlogStyle'
import BlogBox from '../../components/BlogBox/BlogBox';
import BlogData from '../../StaticData/BlogData';
import MotionWrap from '../../Wrapper/MotionWrap/MotionWrap';

const Blog = () => {
    const classes = useStyles()
    return (
        <>
            <SectionHeader title={"Our Blog"} desc={"Tutorials that people love most"} />
            <Container className={classes.blog}>

                {
                    BlogData.map((val, index) => <BlogBox imgUrl={val.img} desc={val.desc} title={val.title} key={index}/>)
                }
               
            </Container>

        </>
    )
}

export default SectionWrap(
    MotionWrap(Blog),
    true,
    "blogs"
  );