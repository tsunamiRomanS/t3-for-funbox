import React, {useState,useEffect,useRef,useReducer} from "react";
import Typography from '@mui/material/Typography';
import {Card,Box,CardMedia,Grid,CardActionArea,CardActions,Button} from '@mui/material';
import {styled} from '@mui/material/styles';
import img from "../../assets/Photo.png";
export default function Card_({description,existence,choice}){
    const [selected,setSelected]=useState(false);
    const [hover,setHover]=useState(null);
    const [disabled,setDisablet]=useState(existence);
    const [color,setColor]=useState("");
    const cardWidthDefault=320;
    const cardHeightDefault=480;
    const cardBorderRadiusDefault=12;
    const cardBorderRadiusContentDefault=8;
    const ElemDiameterHeft=80;
    const backgroundColorDefault="#1698D9";
    const backgroundColorHoverDefault="#2EA8E6";
    const backgroundColorSelected="#D91667";
    const backgroundColorHoverSelected="#E52E7A";
    const backgroundColorDisabled="#F2F2F2";
    const backgroundColorDisabled2="#B3B3B3";
    const colorSelected="#E62E7A";
    const CardBox=styled(Box)({
	width:cardWidthDefault,
	height:cardHeightDefault,
	backgroundColor:!disabled?color:backgroundColorDisabled2,
	display:"flex",
	justifyContent:"center",
	alignItems:"center",
	borderRadius:cardBorderRadiusDefault,
	position:"relative"
    });
    const CardDisabled=styled(Box)({
	position:"absolute",
	backgroundColor:backgroundColorDisabled,
	clipPath:"polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
	width:cardWidthDefault,
	height:cardHeightDefault,
	top:0,
	left:0,
	zIndex:5,
	opacity:0.6,
	borderRadius:cardBorderRadiusDefault,
    });
    const CardContent=styled(Box)({
	backgroundColor:"white",
	clipPath:"polygon(40px 0, 100% 0, 100% 100%, 0 100%, 0 40px)",
	width:cardWidthDefault-cardBorderRadiusDefault,
	height:cardHeightDefault-cardBorderRadiusDefault,
	borderRadius:cardBorderRadiusContentDefault,
	display:"flex",
	flexDirection:"column",
	justifyContent:"space-between",
	overflow:"hidden",
    });
    const Unit=styled(Typography)({
	fontSize:"21px",
	lineHeight:"22px",
	color:"#FFFFFF"
    });
    const Weight=styled(Typography)({
	fontSize:"42px",
	lineHeight:"42px",
	color:"#FFFFFF"
    });
    const Heft=styled(Box)({
	color:"#FFFFFF",
	fontSize:"21px",
	position:"absolute",
	top:"384px",
	left:"224px",
	width:"80px",
	bottom:"16px",
	right:"16px",
	height:"80px",
	borderRadius:"50%",
	display:"flex",
	flexDirection:"column",
	justifyContent:"center",
	alignItems:"center",
	backgroundColor:!disabled?color:backgroundColorDisabled2,
    });
    const BtnBuy=styled(Button)({
	color:"#22A7E9",
	textDecoration: "underline dashed #22A7E9",
	padding:0,
	margin:0,
	minWidth:0,
	fontSize:"13px",
	fontWeight:700,
	borderRadius:0,
	boxShadow: 'none',
	textTransform:"none",
	lineHeight:"14px",
	"&:hover":{
	    textDecoration: "underline dashed #22A7E9"
	},
    });
    useEffect(()=>{
	if(!selected && !disabled){
	    setColor(backgroundColorDefault);
	}else{
	    setColor(backgroundColorSelected);
	}
    },[selected]);
    useEffect(()=>{
	if(!selected && !disabled){
	    if(!hover){
		setColor(backgroundColorDefault);
	    }else{
		setColor(backgroundColorHoverDefault);
	    }
	}else if(selected && !disabled){
	    if(hover){
		setColor(backgroundColorHoverSelected);
	    }else{
		setColor(backgroundColorSelected);
	    };
	};
    },[hover]);
    return (
	<Card sx={{
		  width:cardWidthDefault,
		  height:cardHeightDefault}}
	      onClick={()=>setSelected(!selected)}
	      onMouseEnter={()=>setHover(true)}
	      onMouseLeave={()=>setHover(false)}>
	    {disabled?<CardDisabled/>:null}
	    <CardBox>
		<CardContent>
		    <Box sx={{marginLeft:"48px",marginTop:"21px"}}>
			<Grid container>
			    {!selected?
			     <Grid item>
				 <Typography variant="subtitle1">Сказочное заморское яство</Typography>
			     </Grid>:
			     color===backgroundColorHoverSelected?
			     <Grid item>
				 <Typography variant="subtitle1" sx={{color:colorSelected}}>
				     Котэ не одобряет?
				 </Typography>
			     </Grid>:
			     <Grid item>
				 <Typography variant="subtitle1">Сказочное заморское яство</Typography>
			     </Grid>}
			    <Grid item>
				<Typography variant="h2">Нямушка</Typography>
			    </Grid>
			    <Grid item>
				<Typography variant="h4">{description.type}</Typography>
			    </Grid>
			</Grid>
			<Grid container direction="row" sx={{marginTop:"15px"}}>
			    <Grid item>
				<Typography variant="subtitle2">
				    {description.servings}
				</Typography>
			    </Grid>
			    <Grid item>
				<Typography variant="subtitle2">&nbsp;порций</Typography>
			    </Grid>
			</Grid>
			<Grid container>
			    <Grid item>
				<Typography variant="subtitle2" sx={{width:"127px"}}>
				    {description.gift===5?
				     description.gift+" мышей в подарок заказчик доволен":
				     description.gift===1?"мышь в подарок":
				     description.gift+" мыши в подарок"}
				</Typography>
			    </Grid>
			</Grid>
		    </Box>
		    <Box>
			<figure>
			    <CardMedia component="img" image={img} alt="cat"/>
			</figure>
		    </Box>
		    <Heft>
			<Weight>{description.ponderosity.weight}</Weight>
			<Unit>{description.ponderosity.unit}</Unit>
		    </Heft>
		</CardContent>
	    </CardBox>
	    <Grid container
		  direction="row"
		  justifyContent="center"
		  alignItems="center">
		{disabled?
		 <Grid item>
		     <Typography variant="body2">Печалька,{description.type} закончился.</Typography>
		 </Grid>:
		 !selected?
		 <Grid item>
		     <Typography variant="body1">
			 Чего сидишь? Порадуй котэ,
			 <BtnBuy disableRipple={true}
				 onClick={()=>setSelected(!selected)}>
			     купи
			 </BtnBuy>
		     </Typography>
		 </Grid>:
		 <Typography variant="body1">{choice}</Typography>}
	    </Grid>
	</Card>
    );
};
