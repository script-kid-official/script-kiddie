import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    appName: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        color: 'white',
        backgroundColor: '#000000c2',
        fontSize: '3em'
    },
    avatar: {
        margin: theme.spacing(1),
        padding: theme.spacing(4),
        backgroundColor: theme.palette.secondary.main,
    },
}));

function ErrorPage() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={true} sm={12} md={12} className={classes.image} >
                <div className={classes.appName}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon style={{ fontSize: 40 }} />
                    </Avatar>
                    <Typography variant="h4">
                        Restricted
                    </Typography>

                    <Typography variant="h5" style={{ padding: '1em 0' }}>
                        You do not have access to this content. 
                    </Typography>
                    <Typography variant="h6" style={{ padding: '0' }}>
                    Contact <a style={{color: '#009be5'}} href='mailto:script-kid@script-kiddie.co.za'>script-kid@script-kiddie.co.za</a> to request access.
                    </Typography>


                </div>
            </Grid>
            </Grid>
    );
}

export default ErrorPage;
