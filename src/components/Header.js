import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  toolBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(45deg, #006064 20%, #4DD0E1 80%, #E0F7FA 95%)"
  },
  appBar: {
    opacity: 0.9
  },
  button: {
    fontWeight: 700
  }
};

const Header = props => (
  <AppBar className={props.classes.appBar} position="sticky" color="primary">
    <Toolbar className={props.classes.toolBar}>
      <div>
        <Typography variant="display1" color="inherit">
          Welcome to my site
        </Typography>
        <Typography variant="caption" color="inherit">
          Feel free to check out my projects and please give me a feedback.
        </Typography>
      </div>
      <Button
        size="small"
        color="primary"
        className={props.classes.button}
        onClick={props.onClick}
      >
        Contact
      </Button>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
