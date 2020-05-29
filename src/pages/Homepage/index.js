import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { CssBaseline, Grid, Button } from '@material-ui/core';
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
        fontSize: '4em'
    },

}));

function Homepage() {
    const classes = useStyles();
    const [{ isAuthenticated }] = useContext(AppContext);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={true} sm={12} md={12} className={classes.image} >
                <div className={classes.appName}>Welcome to Script Kiddie!
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
