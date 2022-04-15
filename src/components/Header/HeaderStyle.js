import { makeStyles } from "@mui/styles";
import BgImg from "../../assests/bgImg.png"
const useStyles = makeStyles((theme) => ({

    header__container: {
        backgroundImage: `url(${BgImg})`,
        padding: "1% 5%",
        display: "flex",
        alignContent: "center",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"100vh",
        [theme.breakpoints.down('sm')]: {
            padding: "2%",
            backgroundPosition: "unset",
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            padding: "3%",
            backgroundPosition: "unset",
        }

    },
    header__left_side: {
        flexBasis: "50%",
        [theme.breakpoints.down('sm')]: {
            flexBasis: "100%",
        }
    },
    header__left_side_h1:{
        fontSize:"6rem !important",
        color:theme.allColors.lightBlackColor,
        marginBottom:"2rem !important",
        [theme.breakpoints.down('sm')]: {
            fontSize:"3rem !important",
        },
        [theme.breakpoints.between('sm', 'lg')]: {
            fontSize:"2.5rem !important",
        },
        [theme.breakpoints.between('md', 'xl')]: {
            fontSize:"4rem !important",
        },
      
    },
    header__left_side_span:{
        color:`${theme.allColors.pinkColorPrimary} !important`,
        [theme.breakpoints.down('sm')]: {
            fontSize:"3rem !important",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize:"2.5rem !important",
        },
        [theme.breakpoints.between('md', 'xl')]: {
            fontSize:"4rem !important",
        },
       
    },
    header__left_side_p:{
        fontSize:"2rem",
        marginTop:"5rem",
    },
    header__left_side_btn:{
        marginTop:"2rem"
    },
    header__right_side: {
        flexBasis: "50%",
        width: "80%",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            display:"none"
        }
    },
    header__right_side_img:{
        width: "100%",
        margin: "auto",
        [theme.breakpoints.between('sm', 'lg')]: {
            width: "50vw",
            height:"80vh"
        }
    }
    
}))

export default useStyles