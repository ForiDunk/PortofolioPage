import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  toolBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  typograpth: {
    margin: 10
  }
};

const Header = () => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar style={styles.toolBar}>
        
        <Typography
          style={styles.typograpth}
          variant="display3"
          color="inherit"
        >
          Hello and wellcome to my site! Feel free to check out  my projects and, if you have tive, send me a feedback.
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
