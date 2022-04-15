import { makeStyles } from "@mui/styles";
import ArrowOdd from '../../assests/SvgsAndIcons/arrowEven.svg';
import ArrowEven from '../../assests/SvgsAndIcons/arrowOdd.svg';
const useStyles = makeStyles((theme) => ({
    workflow: {
        position: 'relative',
        maxWidth: '100% !important',
    },
    workflow__box: {
        padding: "2% 5%",
        paddingBottom: "5rem"
    },
    workflow__ul: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        position: 'relative',
        [theme.breakpoints.between('xs', 'md')]: {
            flexDirection: "column",
            flexWrap:"wrap"
        },

    },
    workflow__li: {
        display: "flex",
        flexWrap: "wrap",
        position: 'relative',
        '&::before': {
            position: 'absolute',
            content: '""',
            top: "15px",
            left: "30%",
            backgroundRepeat: `no-repeat`,
            backgroundPosition: 'center center',
            width: 215,
            height: 60,
            [theme.breakpoints.between('xs', 'lg')]: {
                display: 'none',
            },
        },
        '&:nth-of-type(2n-1)::before': {
            backgroundImage: `url(${ArrowEven})`,
        },
        '&:nth-of-type(2n)::before': {
            backgroundImage: `url(${ArrowOdd})`,

            // top: 17,
        },
        '&:last-child::before': {
            display: 'none',
        },
    },
    workflow__li_wrappar: {
        width: "80%",
        [theme.breakpoints.between('xs', 'md')]: {
            width: "100%",
        },
    }
    ,
    workflow__li_title: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        boxSizing: "border-box",
        margin: 0,
        width: "70px",
        height: "70px",
        borderRadius: "40%",
        backgroundColor: "white",
        marginBottom: "1.75rem",
        fontSize: "30px",
        fontWeight: 700,
        boxShadow: "0px 14px 20px rgba(76,119,171,0.1)",
    },
    workflow__li_wrappar_h5: {
        marginBottom: "1.75rem !important",
    },
    workflow__li_wrappar_p: {
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "1.73",
        color: "#343D48",
    }
}))
export default useStyles