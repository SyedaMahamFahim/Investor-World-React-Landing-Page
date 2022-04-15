import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main:"#F5F5F5",
            light:"#110c11"
        },
        secondary: {
            main: '#FF636E',//Pink color
            light:"#1565c0" // blue color,

        }
    },
    typography: {
        fontFamily:'Poppins', 
        color:"#000000cc",
        p:{
            fontSize: '1.0rem',
            fontFamily:'Poppins',
            fontWeight: 400,
        color: "#343D48",
        },
        h1:{
            fontWeight: 700,
        },
        h2:{
            fontWeight: 700,
            fontSize: '2.7rem',
  
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.2rem'
        },
        h4: {
            fontWeight: 700,
            fontSize: '2rem'
        },
        h5: {
            fontWeight: 500
        },
        h6: {
            fontWeight: 500
        }
    },
    allColors:{
        bgColor:"#FEFAFB", 
        pinkColorPrimary: '#FF636E',
        blueLightColor:"#1565c0",
        smokeWhitePrimary:"#F5F5F5",
        lightBlackColor:"#000000cc",
        lightPurpleStokeColor:"#acb0fffa",
        smokeWhiteStokeColor:"#F5F5F5",
        sectionBgColor:"#EDF2F8"  //Light Blue
    },
    
})

export default theme