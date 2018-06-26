import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Roll from "react-reveal/Roll";

const styles = {
  div: {
    width: "100vw",
    height: "100vh",
    padding: 20,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1470290449668-02dd93d9420a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02ea21b9fed45efc7d1354dead77867b&auto=format&fit=crop&w=1950&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  text: {
    marginBottom: "5%",
    textAlign: "center",
    textShadow: "1px 1px 1px #4DD0E1, 2px 2px 2px #00838F"
  },
  button: {
    width: 100,
    height: 60,
    fontWeight: "bold",
    textShadow: "1px 1px 1px #4DD0E1, 2px 2px 2px #00838F",
    "&:hover": {
      transition: "1.5s",
      fontSize: "2rem",
      width: 200,
      height: 120
    }
  }
};

const LandingPage = props => (
  <div className={props.classes.div}>
    <Typography variant="display3" className={props.classes.text}>
      You landed on my Portofolio Site
    </Typography>
    <Roll left duration={2000}>
      <Button
        variant="outlined"
        className={props.classes.button}
        onClick={props.onClick}
      >
        Enter
      </Button>
    </Roll>
  </div>
);

LandingPage.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LandingPage);
