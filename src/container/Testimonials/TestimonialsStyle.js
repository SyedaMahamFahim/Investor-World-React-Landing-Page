import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    testimonials:{
        display:"flex",
        position: 'relative',
        maxWidth: '100% !important',
        paddingBottom:"4rem",
    },
    testimonials__box:{
        display: "flex !important",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

    },
    testimonials__arrows:{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"3rem",
    },
    testimonials__both_arrows:{
        fontSize: "4rem !important",
    }
}))

export default useStyles