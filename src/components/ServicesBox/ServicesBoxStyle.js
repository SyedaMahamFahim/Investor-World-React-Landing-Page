import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    serviceBox: {
        
        display: "flex !important",
        alignContent: "space-between",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.between('xs', 'sm')]: {
            display: "flex !important",
            flexDirection: "column",
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            flexWrap: "wrap",
        },

        
    },
    serviceBox__card: {

        background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
        boxShadow: "27px 27px 49px #c7c7c7,-27px -27px 49px #f9f9f9",
        '&::-webkit-box-shadow:': {
            boxShadow: "27px 27px 49px #c7c7c7,-27px -27px 49px #f9f9f9",
        },
        '&::-moz-box-shadow': {
            boxShadow: "27px 27px 49px #c7c7c7,-27px -27px 49px #f9f9f9",
        },
        textAlign: "center",
        borderRadius: "6px",
        padding: " 50px 25px",
        width: "250px",
        height: "300px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        margin: "2rem",
        '&:hover': {
            background: theme.allColors.pinkColorPrimary,
            transform: "scale(1.05)",
        },
        [theme.breakpoints.between('xs', 'md')]: {
            width: "200px"
        }

    },
    serviceBox__box_img:{
        width: "200px",
        height: "200px",
    },
    
    serviceBox__card_box_content_h3:{
        paddingTop:"1rem !important",
        color:theme.allColors.pinkColorPrimary,
    },
    serviceBox__card_box_content_h3_hover:{
        paddingTop:"1rem !important",
        color:theme.allColors.smokeWhiteStokeColor,
    },
    serviceBox__card_btn:{
        marginTop:"2rem",
    },
    serviceBox__card_btn_a:{
        fontFamily: 'Poppins',
        transition: "all 0.1s ease",
        fontSize: "1.2rem",
        fontWeight: 700,
        color:theme.allColors.pinkColorPrimary,
        
    },
    serviceBox__card_btn_a_hover:{
        fontFamily: 'Poppins',
        transition: "all 0.1s ease",
        fontSize: "1.2rem",
        fontWeight: 700,
        color:theme.allColors.smokeWhiteStokeColor,
        
    }
   
}))
export default useStyles