import React, { useEffect, useContext } from "react";
import { AppContent } from "components";
import { withRouter } from "react-router-dom";
import { AppContext } from "context/AppContext";
import { AppLoader } from "components";
import { Redirect } from "react-router-dom";

function PageContent(props) {
  const [{ isLoading, error, response, current_post }, dispatch] = useContext(
    AppContext
  );
  let pageContent = null;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: "IS_LOADING", payload: true });
    const parent = props.match.path.split("/")[1];
    const child = props.match.params.child;
    dispatch({
      type: "CURRENT_POST",
      payload: { post: fetchContent(parent, child) },
    });
    dispatch({ type: "IS_LOADING", payload: false });

    console.log("PageContent -> pageContent", pageContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.child]);

  const fetchContent = (parent, child) => {
    if (response.hasOwnProperty(parent)) {
      return response[parent].filter((c) => c.post_name === child)[0];
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "rgb(58, 58, 58)" }}>
      {isLoading && <AppLoader open={isLoading} />}
      {error.isError && <Redirect to="/error" />}
      {!isLoading && current_post && (
        <div style={{ margin: "0em 3em", backgroundColor: "#3a3a3a" }}>
          <AppContent current_post={current_post} />
        </div>
      )}
    </div>
  );
}

export default withRouter(PageContent);
