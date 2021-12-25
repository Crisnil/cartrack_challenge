import Container from "@mui/material/Container";
import React, {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";


import logo from './assets/white.svg';
import kilimanjaro from './assets/kilimanjaro.png';
import aeneanvulputate from './assets/aenean-vulputate.jpg';
import loremipseum from './assets/lorem-ipseum.jpg';
import montblanc from './assets/mont-blanc.jpg';
import northernpakistan from './assets/northern-pakistan.jpg';
import olympusgreece from './assets/olympus-greece.jpg';
import patagonia from './assets/patagonia.jpg';
import himalayas from './assets/Image.jpg';

import greenBig from './assets/bg/Polygon3.svg';
import purple from './assets/bg/Polygon2.svg';
import gray from './assets/bg/Polygon4.svg';
import greensmall from './assets/bg/Polygon5.svg';
import graysmall from './assets/bg/Polygon6.svg';
import Box from "@mui/material/Box";
import _ from 'lodash'
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme =>({
    root:{
        width:'100%',
        borderRadius: 0
    },
    paperBox: {
        boxSizing: 'border-box',
        height:460,
        width:'100%',
        backgroundColor:'#3852F7 !important',
        borderRadius:'0 !important'    ,
        paddingTop:63.72,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        overflow:'hidden',
        backgroundImage: `url(${greensmall}),url(${graysmall}),url(${greenBig}),url(${purple}),url(${gray})`,
        backgroundRepeat:  'no-repeat,no-repeat',
        backgroundPosition:'0% 75%,27% 20%,90% 100%,73% 65%,100% 20%',
        [theme.breakpoints.between('md','lg')]: {
            fontSize:70,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:60,

        },
        [theme.breakpoints.down('xs')]: {
            fontSize:292,
            backgroundSize:'10%,8%,33%,27%,10%',
            height:292,
            paddingTop:28.08,
            backgroundPosition:'-57% 10%,58% 21%,90% 72%,73% 65%,114% 20%;',
        },
    },
    logo:{
      height: 27.71,
       width:160,
        [theme.breakpoints.down('xs')]: {
            height: 19.39,
            width:'auto'
        },

    },
    title:{
        color:'#FFFFFF',
        fontSize:80,
        fontWeight:750,
        fontStyle:'normal',
        letterSpacing: '0em',
        marginTop:87.57,
        lineHeight: '1 !important',
        [theme.breakpoints.between('md','lg')]: {
            fontSize:70,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:60,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:32,
            marginTop:52.61
        },
    },
    subs:{
        fontSize: 24,
        lineHeight:1.5,
        fontWeight:400,
        color:'#FFFFFF',
        width:630,
        marginTop: 28,
        [theme.breakpoints.between('md','lg')]: {
            fontSize:22,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:20,
           width:'80%'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize:14,
            width:210,
            marginTop:8
        },

    },
    filter:{
        marginTop:80,
        marginBottom:40
    },
    lists:{

    },
    img:{
        width:'100%'
    },
    cardTitle:{
        marginTop:16,
        fontSize:24,
        fontWeight:900,
        lineHeight:'110%',

        [theme.breakpoints.between('md','lg')]: {
            fontSize:20,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:18,
        },
    },
    cardSubs:{
        fontSize:14,
        lineHeight:'20px',
        marginTop:8,
        [theme.breakpoints.between('md','lg')]: {
            fontSize:14              ,
        },
        [theme.breakpoints.down('md')]: {
            fontSize:13,
        },

    },
    butt:{
        backgroundColor:'#3852F7',
        color:'#fff',
        textTransform:'none',
        fontSize:16
    },
    page:{
        fontSize:14
    },
    pageActive:{
        color:'#3852F7',
        fontSize:14,
        border: '1px solid #3852F7'
    },
    footWrapper:{
        backgroundColor:'#3C3C3C !important',
        height:120,
        borderRadius:'0 ! important',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        },
    footer:{
        display: 'flex !important',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    footlogo:{
        height:23.9,
        width:160,
        alignSelf:'center',
        objectFit:'contain',
        [theme.breakpoints.between('md','lg')]: {
            fontSize:14              ,
        },
        [theme.breakpoints.down('md')]: {
            height:'35%',
        },
    },
    footnote:{
        fontSize:20,
        color:'#fff',
    },
    [theme.breakpoints.between('md','lg')]: {
        fontSize:12
    },
    [theme.breakpoints.down('xs')]: {
        fontSize:10,
    },
}));

function Listing(props) {

    console.log(props)
    const classes = useStyles();
    let history = useHistory();
    const [state,setState]=useState({data:[],loading:false,filters:"himalayas"});

    const getData=()=>{
        fetch('data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setState({...state,data:myJson})
            });
    }
    useEffect(()=>{
        getData()
    },[])

    function goto(item){
        return()=> {
            console.log("te",item)
            history.push(`/${item.slug}`)
        }
    }

    let imgs = [himalayas,kilimanjaro,loremipseum,aeneanvulputate,montblanc,northernpakistan,olympusgreece,patagonia]

    const childItems = state.data.map((item,x)=>{
        return(
            <Grid item xs={6} sm={4} md={3} key={x}>
                <Paper elevation={0} onClick={goto(item)}>
                    <CardMedia
                        className={classes.img}
                        component="img"
                        alt="image01"
                        image={imgs[x]}

                    />
                    <Typography gutterBottom  variant='subtitle1' component="div" className={classes.cardTitle}>
                        {item.title}
                    </Typography>
                    <Typography gutterBottom  variant="subtitle2" component="div" className={classes.cardSubs}>
                        {item.title_long}
                    </Typography>
                </Paper>
            </Grid>
        )
    })


    return (
        <>
            <Box>
                <Paper elevation={0} className={classes.paperBox}>
                    <Container maxWidth="xl">
                        <CardMedia
                            className={classes.logo}
                            component="img"
                            alt="logo"
                            image= {logo}
                        />
                        <Typography gutterBottom  variant='subtitle1' component="div" className={classes.title}>
                            Mountains
                        </Typography>
                        <Typography gutterBottom  variant="subtitle2" component="div" className={classes.subs}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex ut blandit condimentum.
                        </Typography>
                    </Container>
                </Paper>
            </Box>
            <Container maxWidth="xl">
                <Grid container
                      spacing={4}
                      className={classes.filter}
                >
                    <Grid item xs={12} sm={8} md={8} >
                        <TextField id="outlined-basic" placeholder="Search for mountains" variant="outlined" fullWidth
                               InputProps={{
                                   startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                               }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container
                      spacing={4}
                      className={classes.lists}
                >
                    {childItems}
                </Grid>
            </Container>
            <Container maxWidth="xl">
                <Grid container
                      spacing={4}
                      className={classes.filter}
                >
                    <Grid item xs={12} sm={6} md={9} >
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button className={classes.pageActive}>1</Button>
                            <Button className={classes.page}>2</Button>
                            <Button className={classes.page}>3</Button>
                            <Button className={classes.page}>...</Button>
                            <Button className={classes.page}>9</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Button variant="contained" primary fullWidth className={classes.butt}>Show next</Button>
                    </Grid>
                </Grid>
            </Container>
            <Box>
                <Paper elevation={0} className={classes.footWrapper}>
                    <Container maxWidth="xl" className={classes.footer}>
                        <CardMedia
                            className={classes.footlogo}
                            component="img"
                            alt="image01"
                            image={logo}

                        />
                        <Typography gutterBottom   variant="subtitle2" className={classes.footnote}>
                            Front-end developer test page – September 2021
                        </Typography>
                    </Container>
                </Paper>
            </Box>
        </>
    );
}

export default Listing;
