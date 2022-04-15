import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  videoComponent: {
    position: 'relative'
  },
  videoComponent__speedDial: {
    position: 'absolute',
    bottom: "40%",
    right: "50%",
    left: "50%",
    '&::before':{
      position: 'absolute',
      bottom: "40%",
      right: "50%",
      left: "50%",
      backgroundColor: 'red',
      borderRadius: '50%',
      animation: 'myEffect 1.5s ease-out infinite',
      opacity: 0.5,
    },
    
  },
  videoComponent_video_btn: {
    position: 'absolute !important',
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    color: "red !important"

  },
  "@keyframes myEffect": {
    "0%": {
      transform: "translateX(-50%) translateY(-50%) translateZ(0) scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "translateX(-50%) translateY(-50%) translateZ(0) scale(1.5)",
      opacity: 0,
    }
  },
}))


export default useStyles