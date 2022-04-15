import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    ourservices: {
        position: 'relative',
        maxWidth: '100% !important',
        paddingBottom:"7rem",
        [theme.breakpoints.between('xs', 'sm')]: {
            maxWidth: '80% !important',
        }

    },
    ourservices__box:{
        maxWidth: '100% !important',
    }
}))
export default useStyles