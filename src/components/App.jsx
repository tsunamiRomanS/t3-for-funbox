import React from "react";
import {createTheme,ThemeProvider} from '@mui/material/styles';
import {Grid} from "@mui/material";
import "./App.scss";
import Card from "./Card_/Card_.jsx";
export default function App(){
    const data = [
      {id: 1,
       description:{type: "с фуа-гра", servings: 10, gift: 1, ponderosity: {unit: "кг", weight: "0,5"}},
       choice: "Печень утки разварная с артишоками.",
       existence: false},
      {id: 2,
       description:{type: "с рыбой", servings: 40, gift: 2, ponderosity: {unit: "кг", weight: "2"}},
       choice: "Головы щучьи с чесноком да свежайшая сёмгушка.",
       existence: true,},
      {id: 3,
       description:{type: "с курой", servings: 100, gift: 5, ponderosity: {unit: "кг", weight: "5"}},
       choice: "Филе из цыплят с трюфелями в бульоне.",
       existence: false,}
    ];
    const defaultTheme=createTheme();
    const theme=createTheme({
	typography:{
	    fontFamily:["Trebuchet MS"].join(","),
	    h2:{
		fontSize:"48px",
		fontWeight: 700,
		color:"#000000",
	    },
	    h4:{
		fontSize:"24px",
		fontWeight:700,
		color:"#000000",
	    },
	    subtitle1:{
		fontSize:"16px",
		fontWeight:400,
		color:"#666666",
	    },
	    subtitle2:{
		fontSize:"14px",
		fontWeight:400,
		lineHeight:"16pxp",
		color:"#666666",
	    },
	    body1:{
		fontSize:"13px",
		fontWeight:400,
		lineHeight:"15px",
		color:"#FFFFFF",
	    },
	    body2:{
		fontSize:"13px",
		fontWeight:400,
		lineHeight:"15px",
		color:"#FFFFFF"
	    },
	},
	components:{
	    MuiCard:{
		styleOverrides:{
		    root:{
			width:320,
			minHeight:509,
			clipPath:"polygon(43px 0, 100% 0, 100% 100%, 0 100%, 0 43px)",
			overflow:"hidden",
			backgroundColor:"transparent",
			display:"flex",
			flexDirection:"column",
			justifyContent:"space-between",
			alignItems:"center",
			position:"relative",
			zIndex:0
		    },
		},
	    },
	    MuiTypography:{
		defaultProps:{
		    variantMapping:{
			h1:"h1",
			h2:"h2",
			h4:"h4",
			subtitle2:"p",
			subtitle1:"span",
			body1:"p",
			body2:"p",
		    },
		},
	    },
	},
    });
    return (
	<ThemeProvider theme={theme}>
	    <header>Ты сегодня покормил кота?</header>
	    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={11}>
		{data.map((i) =>  <Grid item key={i.id}>
				      <Card {...i}/>
				  </Grid>
			 )}
	    </Grid>
	</ThemeProvider>
    );
};
