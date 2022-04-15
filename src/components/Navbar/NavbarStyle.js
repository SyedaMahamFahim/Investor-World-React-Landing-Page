import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: "white !important"
    },
    navbar__container: {
        display: "flex !important",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        alignContent: "center",
        justifyContent: "space-between",
        alignitems: "center"
    },
    navbarLogo: {
        color: `${theme.allColors.pinkColorPrimary} !important`,
        ...theme.typography.h2,

    },
    navbar__rightside: {
        display: "flex",
        flexBasis: "30%",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexBasis: "70%",
        }
    },
    navbar__leftside: {
        display: "none",
        [theme.breakpoints.up('lg')]: {
            display: "flex !important",
            flexBasis: "70%",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "flex-end",
        }
    },
    navbar__menu_ul: {
        display: "flex !important",
        alignContent: "center",
    },
    navbar__menu_li: {
        textAlign:"center",
        alignContent: "center",
        position: "relative",
        display: "block",
        padding: "20px 0px",
        cursor:"pointer"
    },
    navbar__menu_ul_li_a: {
        textDecorationLine: "none",

    },

    navbar__menu_ul_li_text: {
        color: theme.allColors.lightBlackColor,
        fontWeight: 700,
        listStyle: "none",
        transition: "all 0.3s ease",
        '&:hover': {
            color: theme.allColors.pinkColorPrimary,
        },

    },
    navbar__mobile_menu: {
        display: "none",
        [theme.breakpoints.down('lg')]: {
            display: "flex",
            flexBasis: "30%",
            justifyContent: "flex-end",
        }
    },
    navbar__drawer_bar_icon: {
        fontSize: "40px !important",
        fontWeight: 500,
        color: theme.allColors.pinkColorPrimary,
    },
    navbar__drawer_close_icon: {
        display: "flex",
        margin: "15px",
        justifyContent: "flex-end",
    },
    navbar__drawer_btn: {
        margin: "12px"
    }

}))

export default useStyles