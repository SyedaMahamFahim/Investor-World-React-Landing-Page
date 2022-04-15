import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  blog: {
    display: "flex !important",
    alignItems: "center",
    alignContent: "space-between",
    justifyContent: "space-around",
    paddingBottom: "15rem",
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: "column",
      flexWrap: "wrap"
    },
  },

}))
export default useStyles