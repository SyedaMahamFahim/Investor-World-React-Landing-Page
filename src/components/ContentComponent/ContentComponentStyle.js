import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    contentComponent: {
        margin: "2rem",
        [theme.breakpoints.between('xs', 'md')]: {
            margin: "0.5rem",
        },
        [theme.breakpoints.between('md', 'xl')]: {
            margin: "1rem",
        }
    },
    contentComponent__title: {
        marginBottom: "2rem !important",
        lineHeight: "4rem !important",
        [theme.breakpoints.between('xs', 'sm')]: {
            fontSize: "1.5rem !important",
            lineHeight: "2rem !important",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: "1.75rem !important",
            lineHeight: "2rem !important",
        },
        [theme.breakpoints.between('md', 'xl')]: {
            fontSize: "3rem !important",
            lineHeight: "3rem !important",
        }
        
    },
    contentComponent__p: {
        marginBottom:"1rem"
    },
    contentComponent_box:{
        display:"flex",        
    },
    contentComponent__ul: {
        display: "flex",
        flexWrap: "wrap",
    },
    contentComponent__li: {
        display: "flex",
        flexBasis: "50%",
        paddingLeft: "0px !important",
    },

    contentComponent__li_btn: {
        cursor: "auto !important"
    },
    contentComponent__li_btn_icon:{
        color:theme.allColors.pinkColorPrimary,
    }
}))

export default useStyles