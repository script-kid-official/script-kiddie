import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const styles = (theme) => ({
  paper: {
    overflow: 'hidden',
    backgroundColor: '#3a3a3a',
    color: 'white',
    border: 'none',
    boxShadow: 'none'
  },

});

function AppContent(props) {
  const { classes, content, description, name } = props;

  return (
    <Paper className={classes.paper}>
      <div>
        <Typography variant="h5" align="center">{name}</Typography>
        <Typography variant="body1" align="center">{description}</Typography>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Paper>
  );
}

// Set default props
AppContent.defaultProps = {
  name: "Content Name",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
};

export default withRouter(withStyles(styles)(AppContent));
