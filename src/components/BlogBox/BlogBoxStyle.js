import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
    blogBox_box:{
        flexBasis:"32%",
        paddingBottom:"1rem",
        boxShadow: "0px 0px 30px rgb(0 0 0 / 10%)",
        transition: "all 0.7s ease",
        margin:"15px 0px",
        '&:hover': {
            transform: "scale(1.05)",
        },
        
    },
    blogBox__cardAction:{
        marginLeft:"0.5rem"
    }
}))


export default useStyles