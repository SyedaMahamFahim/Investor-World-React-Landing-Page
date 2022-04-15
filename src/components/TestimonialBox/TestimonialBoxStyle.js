import { makeStyles } from "@mui/styles";




const useStyles = makeStyles((theme) => ({
    testimonialBox: {
        
        width: "30% !important",
        margin:"auto",
        height: "auto",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        padding: "2rem",
        borderRadius: "15px",
        boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        [theme.breakpoints.between('xs', 'sm')]: {
            width: "98% !important",   
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: "80% !important",   
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "50% !important",   
        },
    },
    testimonialBox__profile: {
        display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:"2rem",
    
    },
    testimonialBox__profile_img:{
        width:"250px",
        height:"250px",
        borderRadius:"100%"

    },
    testimonialBox__content: {
       
    },
    testimonialBox__content_feedback: {
        marginTop: "2rem",
    padding: "5%",
    letterSpacing: "1px",
    height: "40px",
    overflowY: "scroll",
    overflowX: "hidden",
    },
    testimonialBox__content_info: {
        display: "flex !important",
        flexDirection: "column",
        marginTop: "2rem",
    
    },
    testimonialBox__content_info_name: {
        fontSize: "2rem !important",
    fontWeight: "800 !important",
    letterSpacing: "1px",
    },
    testimonialBox__content_info_position:{
        fontWeight: "600 !important",
    },
    testimonialBox__content_info_company: {
        fontWeight: "600 !important",
        color: `${theme.allColors.pinkColorPrimary} !important`,
    },
    
}))






export default useStyles