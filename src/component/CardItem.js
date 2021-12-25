import CardMedia from "../Listing";
import image01 from "../assets/Image.jpg";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme =>({

    img:{
        width:'100%',
    },
    cardTitle:{
        marginTop:16,
        fontSize:24,
        fontWeight:900,
        lineHeight:'110%'
    },
    cardSubs:{
        fontSize:14,
        lineHeight:'20px',
        marginTop:8

    }
}));


function CardItem() {

    const classes = useStyles();
    return (

                <Paper elevation={0}>
                    <CardMedia
                        className={classes.img}
                        component="img"
                        alt="image01"
                        image = {image01}

                    />
                    <Typography gutterBottom  variant='subtitle1' component="div" className={classes.cardTitle}>
                        Denali National Park and Preserve
                    </Typography>
                    <Typography gutterBottom  variant="subtitle2" component="div" className={classes.cardSubs}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ex ut blandit condimentum.
                    </Typography>
                </Paper>

    );
}

export default CardItem;
