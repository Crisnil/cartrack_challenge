
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
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    };

    return(
        <Paper elevation={0} className={classes.paperBox}>
                    <Card>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings">
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
                                <TextField id="outlined-basic" label="Name" variant="outlined" name={"user_name"} /> <br/>
                                <TextField id="outlined-basic" label="Email" variant="outlined" name={"user_email"} /> <br/>
                                <TextareaAutosize
                                    name = "message"
                                    aria-label="minimum height"
                                    minRows={3}
                                    style={{ width: "100%" }}
                                />
                            </form>

                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={sendEmail}>Send</Button>
                        </CardActions>
                    </Card>
        </Paper>
    )
}


const useStyles = makeStyles(theme =>({
    root: {
        width: '100%',
        borderRadius: 0
    },
    paperBox:{
        display:"flex",
        width:"30%",
        flexDirection:"column",
        justifyContent:"center",
        height:"100vh",
        margin:"auto"

    }
}));

export default Details;