import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    overflow: "hidden",
    backgroundColor: "#3a3a3a",
    color: "white",
    border: "none",
    boxShadow: "none",
  },
}));

function AppContent(props) {
  const { post_title, post_content } = props.current_post.post;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div style={{ margin: "6em 0 0 0" }}>
        <Typography variant="h5" align="center" style={{ margin: "1em 0" }}>
          {post_title}
        </Typography>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post_content }} />
    </Paper>
  );
}

// Set default props
AppContent.defaultProps = {
  current_post: {
    post: {
      post_title: "Content Name",
    },
  },
};

export default withRouter(AppContent);
