import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    callToAction__container: {
        backgroundColor: theme.allColors.pinkColorPrimary,
        borderRadius:"10px",
        marginBottom:"5rem",
        [theme.breakpoints.between('xs', 'sm')]: {
            marginBottom:"1rem",
          },
    },
    callToAction__box: {
        
        display: "flex !important",
        alignContent: "flex-end",
        justifyContent: "space-between",
        alignItems: "center",
        padding:"4rem",
        marginTop:"-10%",
        borderRadius:"20rem",
        [theme.breakpoints.between('xs', 'sm')]: {
            flexDirection: "column",
            padding:"2rem",
          },
       
    },
    callToAction__box_title:{
        flexBasis:"60%"
    },
    
    callToAction__box_btn:{
        
    },
    callToAction__box_title_h4:{
        fontSize:"2rem !important",
        color:`${theme.allColors.smokeWhiteStokeColor} !important`,
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize:"1.5rem !important"
          },
    }
}))

export default useStyles