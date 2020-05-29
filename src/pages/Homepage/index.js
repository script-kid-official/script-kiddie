import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { CssBaseline, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

}));

function Homepage() {
    const classes = useStyles();
    const [{ isAuthenticated }] = useContext(AppContext);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={true} sm={12} md={12} className={classes.image} >
                <div className={classes.appName}>
                    <Typography variant="h3">
                        Welcome to Script Kiddie - Beta!
                    </Typography>

                    <Typography variant="h5" style={{ padding: '1em 0' }}>
                        One Resource for Everything Coding!
                    </Typography>
                    {!isAuthenticated && <Link to='/login'>
                        <Button variant="contained" color="primary" style={{ fontSize: '0.4em', padding: '.3em 1.5em' }}>LOGIN</Button>
                    </Link>
                    }
                </div>
            </Grid>
        </Grid>
    );
}

export default Homepage;
