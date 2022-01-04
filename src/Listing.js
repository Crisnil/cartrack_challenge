import Container from "@mui/material/Container";
import React, {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme =>({
    root:{
        width:'100%',
        borderRadius: 0
    },
    paperBox: {
        boxSizing: 'border-box',
        height:200,
        width:'100%',
        backgroundColor:'#3852F7 !important',
        borderRadius:'0 !important'    ,
        paddingTop:20.72,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        overflow:'hidden',
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
    footerSection:{
        marginTop:20
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
    const classes = useStyles();
    let history = useHistory();
    const [state,setState]= useState({ data:[], loading:false,queries:`users`});
    const [filter,setFilters]= useState("");
    const [loading,setLoading]=useState(false);

    useEffect (
        ()=>{

            fetch(`https://jsonplaceholder.typicode.com/users`
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
                    setState({data:myJson})
                });
        },
        []
    )


    function goto(item){
        return()=> {
            history.push(`/${item.id}`)
        }
    }

    function searchTeam (d){
        setFilters(d.target.value);

    }

    function handlePress(e){
        if(e.key === "Enter"){
            goSearch();
        }
    }

    function goSearch(){

        setLoading(true)
        let queryString = ``;

        if(filter === ""){
            queryString = `users`    
        }
        else if(filter.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

           queryString = `users?email=${filter}`              
        }
        else{
            queryString = `users?name=${filter}`   
        }

        fetch(`https://jsonplaceholder.typicode.com/${queryString}`
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
                setLoading(false)
                setState({data:myJson})
            });
    } 

    let  childItems = <div style={{height:'50vh'}}>
                        <p>No records found</p>
                        </div>;
    if(state.data.length > 0){
    childItems = state.data.map((item,x)=>{

            return(
                <Grid item xs={6} sm={4} md={3} key={x}>
                    <Paper elevation={0}>
                        <Card>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {item.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                {item?.company?.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {item?.email}
                                </Typography>
                                
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={goto(item)}>More Details</Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            )
        })
    }


    return (
        <>
            <Box>
                <Paper elevation={0} className={classes.paperBox}>
                    <Container maxWidth="xl">
                        <Typography gutterBottom  variant='subtitle1' component="div" className={classes.title}>
                            Teams React
                        </Typography>
                        <Typography gutterBottom  variant="subtitle2" component="div" className={classes.subs}>
                           List of teams
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
                        <TextField id="outlined-basic" placeholder="Search for Teams" variant="outlined" fullWidth
                                value = {filter}
                                onChange={d=>searchTeam(d)}
                                onKeyDown  ={handlePress}
                                InputProps={{
                                   startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                                   endAdornment : loading ?  <CircularProgress /> :<Button onClick={goSearch} color={'primary'} variant={'contained'} >Search</Button>
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
            <Box className={classes.footerSection}>
                <Paper elevation={0} className={classes.footWrapper}>
                    <Container maxWidth="xl" className={classes.footer}>
                                <Typography variant="h5" component="div" className={classes.footnote}>
                                    Some Footer Here
                                </Typography>
                    </Container>
                </Paper>
            </Box>
        </>
    );
}

export default Listing;
