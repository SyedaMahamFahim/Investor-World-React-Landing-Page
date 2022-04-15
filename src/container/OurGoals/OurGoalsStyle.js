import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
 
  ourgoals:{
    display:"flex !important",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom:"2rem",
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: "column-reverse",
  },
},
  ourgoals__video:{
    flexBasis:"50%",
    height:"45rem",
    [theme.breakpoints.between('xs', 'md')]: {
      height:"20rem",
  },
  },
  ourgoals__content:{
    flexBasis:"50%",
  },
  ourgoals__btn:{
    margin: "0rem 2rem 2rem 2rem",
  }
}))
export default useStyles