import React, { useEffect, useContext } from 'react';
import { AppContent } from 'components';
import { withRouter } from 'react-router-dom';
import { AppContext } from 'context/AppContext';
import { fetchContentBySlug } from 'api'
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function PageContent(props) {
    const [{ isLoading, response }, dispatch] = useContext(AppContext);
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: 'IS_LOADING', payload: true })
        const parent = props.match.path.split('/')[1];
        const child = props.match.params.child;
        fetchContent(parent, child)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.child])

    const fetchContent = async (parent, child) => {
        try {
            const response = await fetchContentBySlug(parent, child)
            if (response) {
                dispatch({ type: 'SET_CONTENT', payload: response })
                dispatch({ type: 'IS_LOADING', payload: false })
            }
        } catch (error) {
            throw new Error('API Error: ', error)
        }
    }

    return (
        <div style={{ height: '100vh', backgroundColor: 'rgb(58, 58, 58)' }}>
            {isLoading && <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit" />
                <Typography variant='h5' style={{ paddingLeft: '1em' }}>LOADING</Typography>
            </Backdrop>
            }

            {(!isLoading) &&
                (response) &&
                response.map((e, key) => {
                    return <div key={key} style={{ paddingTop: '1em', backgroundColor: '#3a3a3a' }}>
                        <AppContent key={e.id} {...e} />
                    </div>
                })

            }
        </div>
    );
}


export default withRouter(PageContent);
