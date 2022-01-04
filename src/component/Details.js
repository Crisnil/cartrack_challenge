
import React, {useEffect, useRef, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from '@mui/icons-material/Call';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import emailjs from '@emailjs/browser';
import TextField from "@material-ui/core/TextField";

function Details(props) {

    const classes = useStyles();

    const form = useRef();

    const [state,setState] = useState({});

    const [loading,setLoading] = useState(false);

    let { teamId } = useParams();

    useEffect (
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/users?id=${teamId}`
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
                    setState(myJson[0])
                });
        },
        []
    )


    const sendEmail = (e) => {
        e.preventDefault();
            console.log(e,form)
        setLoading(true)
         emailjs.sendForm('service_q5vhlhr', 'template_oh47k8b', form.current, 'user_5i02o9SdsvTxKs0MpcW98')
            .then((result) => {
                console.log(result.text);
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
            });
    };

    return(
        <Grid item xs={12} sm={12} md={3} className={classes.wrapper}>
            <Paper elevation={0} className={classes.paperBox}>
                        <Card>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings" onClick={()=>{window.open(`tel:${state.phone}`)}}>
                                        <CallIcon />
                                    </IconButton>
                                }
                                title={state.name}
                                subheader={state?.company?.name}
                            />
                            <CardContent>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Send email to : {state?.email}
                                </Typography>

                                <br/>
                                <form ref={form}>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" name={"user_name"} value={state.name} className={classes.name1} disabled/> <br/>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" name={"user_email"} value={state.email} className={classes.email1} disabled/> <br/>
                                    <TextareaAutosize
                                        name = "message"
                                        aria-label="minimum height"
                                        minRows={3}
                                        style={{ width: "100%" }}
                                        placeholder={"Your message"}
                                    />
                                </form>

                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={sendEmail} disabled={loading} color={'primary'} variant={"contained"}>Send</Button>
                            </CardActions>
                        </Card>
            </Paper>
        </Grid>
    )
}


const useStyles = makeStyles(theme =>({
    root: {
        width: '100%',
        borderRadius: 0
    },
    wrapper:{
        margin:"auto"
    },
    paperBox:{
        display:"flex",
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        height:"100vh",
        margin:"auto"

    },
    name1:{
        width:"100%",
        margin: "20px 0px",
    },
    email1:{
        width:"100%",
        margin: "20px 0px",
    }

}));

export default Details;