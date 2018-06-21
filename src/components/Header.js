import React from "react";
import { AppBar, Toolbar, Typography, Paper, Button } from "@material-ui/core";

const styles = {
  toolBar: {
    display: "flex",
    flexWrap: "no-wrap",
    flex: 1,
    justifyContent: "space-between"
  },
  paper: {
    marginTop: 20,
    maxWidth: 500,
    textAlign: "center"
  },
  typograpth: {
    marginBottom: 10
  }
};

const Header = (props) => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar style={styles.toolBar}>
      <div>
        <Paper style={styles.paper}>
          <Typography
            style={styles.typograpth}
            variant="display2"
            color="primary"
          >
            Wellcome to my site!
          </Typography>
        </Paper>
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
