import React, { useEffect, useContext } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Tooltip from '@material-ui/core/Tooltip';
// import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
// import RefreshIcon from '@material-ui/icons/Refresh';
import { AppContext } from 'context/AppContext';
import { fetchContentBySlug } from 'api'
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  paper: {
    overflow: 'hidden',
    backgroundColor: '#3a3a3a',
    color: 'white',
    border: 'none',
    boxShadow: 'none'
  },
  contentWrapper: {
    backgroundColor: '#3a3a3a',
    padding: theme.spacing(4, 0),

  },
  pageTitle: {
    padding: theme.spacing(1, 0, 0, 0),
  }
});

function AppContent(props) {
  const { classes } = props;
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const parent = props.match.path.split('/')[1];
    const child = props.match.params.child;
    fetchContent(parent, child)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.child])

  const fetchContent = async (parent, child) => {
    const response = await fetchContentBySlug(parent, child)
    if (response) dispatch({ type: 'SET_CONTENT', payload: response })
  }

  return (
    <div className={classes.contentWrapper}>
      {(state.response) &&
        state.response.map((e, key) => {
          return <Paper key={key} className={classes.paper}>
            <div className={classes.pageTitle}>
              <Typography variant="h5" align="center">{e.name}</Typography>
              <Typography variant="body1" align="center">{e.description}</Typography>
            </div>

            <div dangerouslySetInnerHTML={{ __html: e.content }} />
          </Paper>
        })
      }
      {(!state.response) && <div>Loading</div>}
    </div>

  );
}

export default withRouter(withStyles(styles)(AppContent));
