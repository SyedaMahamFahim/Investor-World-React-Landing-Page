import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    colorBtn: {
        backgroundColor: `${theme.palette.secondary.main} !important`,
        color: `${theme.palette.primary.main} !important`
    },
    viewMoreBtn: {
        backgroundColor: `${theme.palette.secondary.main} !important`,
        color: `${theme.palette.primary.main} !important`
    },
    whiteBtn:{

        padding: "15px 44px !important",
        fontSize: "1.25rem !important",
        fontWeight: "700 !important",
        color: `${theme.allColors.pinkColorPrimary} !important`,
        backgroundColor: `${theme.allColors.smokeWhiteStokeColor} !important`,
        '&:hover': {
            color: `${theme.allColors.smokeWhiteStokeColor} !important`,
            backgroundColor: `${theme.allColors.lightBlackColor} !important`,
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            marginTop:"10px !important",
            padding: "15px 14px !important",
          },

    }
   
}))

export default useStyles