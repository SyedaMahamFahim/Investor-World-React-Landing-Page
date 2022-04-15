import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    footer:{
textAlign:"center"
    },
    footer__box:{
        display: "flex !important",
        alignContent: "flex-center",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.between('xs', 'sm')]: {
            flexDirection: "column",
          },

       
    },
    footer__box_footer_menu_ul:{
        display: "flex !important",
        alignContent: "center",
        [theme.breakpoints.between('xs', 'sm')]: {
            flexDirection: "column",
          },
    },
    footer__copyright: {
        margin: "0px",
        [theme.breakpoints.up('xs')]: {
            position: "fixed",
            bottom: "0",
            margin: "0px 15px 0px 15px",
        }

    },
    footer__copyright_h6: {

        fontSize: "14px !important",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem !important",
        }
    }

}))

export default useStyles