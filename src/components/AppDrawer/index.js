import React, { useContext } from "react";
import { AppContext } from "context/AppContext";
import { useTheme } from "@material-ui/core/styles";
import { Drawer, List, Divider, IconButton } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AppDrawerItem from "./AppDrawerItem";
function AppNavigation() {
  const theme = useTheme();
  const [{ toggleDrawer, routes }, dispatch] = useContext(AppContext);

  const handleToggleDrawer = (event) => {
    dispatch({ type: "TOGGLE_DRAWER" });
  };

  return (
    <Drawer variant="persistent" anchor="left" open={toggleDrawer}>
      <IconButton onClick={handleToggleDrawer}>
        {theme.direction === "ltr" ? (
          <ChevronLeftIcon style={{ color: "white" }} />
        ) : (
          <ChevronRightIcon />
        )}
      </IconButton>
      <Divider />

      <List>
        {routes.map((parent) => (
          <List key={parent.id}>
            <AppDrawerItem parent={parent} />
          </List>
        ))}
      </List>
    </Drawer>
  );
}

export default AppNavigation;
