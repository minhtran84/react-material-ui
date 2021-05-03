import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: '#5D5C61',
        //padding: theme.spacing(1),
        // color: theme.palette.text.secondary,
        //background: 'linear-gradient(45deg, hsla(212, 35%, 58%, 1) 0%, hsla(218, 32%, 80%, 1) 100%)',
    },
    cardHeader: {
        color: theme.palette.primary.contrastText,    
    },
    cardContent: {
        color: theme.palette.grey[300],
    },
}));

const SimpleCard = () => {

    const classes = useStyles();

    return (

        <Card className={classes.card}>
            <CardHeader title="Some header text goes here" className={classes.cardHeader} />
            <CardContent>
                <Typography variant="body2" gutterBottom className={classes.cardContent}>
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SimpleCard;