import React, { useContext, useState } from 'react';
import useInputState from 'utils/hooks/useInputState';
import { Redirect } from "react-router-dom";
import { AppContext } from 'context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, CssBaseline, TextField, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { postLogin } from 'api';
import { setCookie } from 'utils/common';


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
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function PageLogin() {
    const [state, dispatch] = useContext(AppContext);
    const classes = useStyles();
    const [showMessage, setShowMessage] = useState(false);
    const [inputLogin, setInputLogin] = useInputState('test');
    const [inputPassword, setInputPassword] = useInputState('test123');

    const handleLogin = async (e) => {
        e.preventDefault();
        const login = await postLogin(inputLogin, inputPassword);

        if (login.status === 'failed') setShowMessage(login)
        if (login.jwt) {
            setCookie('SKToken', login.jwt, 1)
            dispatch({ type: 'SET_JWT_TOKEN', payload: login.jwt })
            dispatch({ type: 'TOGGLE_DRAWER' })
        }
    }


    if (state.isAuthenticated) return <Redirect to="/" />;

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <form noValidate autoComplete="on">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login/Usename"
                            name="login"
                            value={inputLogin}
                            onChange={setInputLogin}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={inputPassword}
                            id="password"
                            onChange={setInputPassword}
                            autoComplete="current-password"
                        />
                        {showMessage &&
                            <div style={{ fontSize: '1em', color: showMessage.status === 'failed' ? 'red' : 'green' }}>{showMessage.message}</div>
                        }
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleLogin} >
                            Sign In
                        </Button>
                    </form>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href="https://github.com/steven-jackson-dev/" target="_blank">Steven Jackson</Link>
            {' '}{new Date().getFullYear()}
        </Typography>
    );
}

export default PageLogin;