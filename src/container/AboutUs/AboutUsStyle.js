import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  aboutus:{
    display:"flex !important",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom:"2rem",
    [theme.breakpoints.between('xs', 'md')]: {
      flexDirection: "column",
  },
},
  aboutus__img:{
    flexBasis:"50%",
  },
  aboutus__content:{
    flexBasis:"50%",
  },
  aboutus__btn:{
    margin: "0rem 2rem 2rem 2rem",
  }
}))
export default useStyles