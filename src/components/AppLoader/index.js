import React from 'react'
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function AppLoader({ open }) {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit" />
            <Typography variant='h5' style={{ paddingLeft: '1em' }}>LOADING</Typography>
        </Backdrop>
    )
}
