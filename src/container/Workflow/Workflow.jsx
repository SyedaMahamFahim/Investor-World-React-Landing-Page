import React from 'react'
import useStyles from './WorkflowStyle'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import { Container, Box, List, ListItem,Typography } from '@mui/material';
import WorkflowData from '../../StaticData/WorkflowData'
import SectionWrap from '../../Wrapper/SectionWrap/SectionWrap';
import MotionWrap from '../../Wrapper/MotionWrap/MotionWrap';


const Workflow = () => {
  const classes = useStyles();

  return (
    <>

      <Container className={classes.workflow}>
        <SectionHeader title={"Workflow"} desc={"Learn how its works"} />

        <Box className={classes.workflow__box}>
          <List className={classes.workflow__ul} >
            {
              WorkflowData.map((context) => {
                return (
                  <ListItem className={classes.workflow__li} key={`key_${context.id}`}>

                    <Box className={classes.workflow__li_title}>
                      {`0${context.id}`}
                    </Box>
                    <Box className={classes.workflow__li_wrappar}>
                      <Typography variant='h5' className={classes.workflow__li_wrappar_h5}>{context.title} </Typography>
                      <Typography variant='p' className={classes.workflow__li_wrappar_p}>{context.desc} </Typography>
                    </Box>

                  </ListItem>
                )
              })
            }

          </List>
        </Box>

      </Container>

    </>
  )
}


export default SectionWrap(
  MotionWrap(Workflow),
  true,
  "workflow"
);

