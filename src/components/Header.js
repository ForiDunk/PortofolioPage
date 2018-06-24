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
    flexWrap: "no-wrap",
    flex: 1,
    justifyContent: "space-between",
    background: "linear-gradient(45deg, #006064 20%, #4DD0E1 80%, #E0F7FA 95%)",
  },
  div: {
    opacity: 0.9
  },
  typograpth: {
    margin: 10
  },
  button: {
    color: "#006064",
    fontWeight: 700,
  }
};

const Header = props => (
  <div className={props.classes.div}>
    <AppBar position="fixed" color="primary">
      <Toolbar className={props.classes.toolBar}>
        <div>
          <Typography
            className={props.classes.typograpth}
            variant="display2"
            color="inherit"
          >
            Wellcome to my site!
          </Typography>
          <Typography
            variant="subheading"
            color="inherit"
            className={props.classes.typograpth}
          >
            Feel free to check out my projects and, if you have tive, send me a
            feedback.
          </Typography>
        </div>
        <Button
          size="large"
          className={props.classes.button}
          onClick={props.onClick}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
