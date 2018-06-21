import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const styles = {
  toolBar: {
    display: "flex",
    flexWrap: "no-wrap",
    flex: 1,
    justifyContent: "space-between"
  },
  typograpth: {
    margin: 10
  }
};

const Header = (props) => (
  <div>
    <AppBar position="static" color="secondary">
      <Toolbar style={styles.toolBar}>
      <div>
        <Typography
          style={styles.typograpth}
          variant="display2"
          color="inherit"
        >
          Wellcome to my site!
        </Typography>
        <Typography 
        variant="subheading"
        color="inherit" 
        style={styles.typograpth}>
          Feel free to check out my projects and, if you have tive, send me a feedback.
        </Typography>
        </div>
        <Button size="large" color="inherit" onClick={props.onClick}>Contact</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
