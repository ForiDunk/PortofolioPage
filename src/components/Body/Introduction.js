import React from "react";
import { Paper, Typography, withStyles, Divider } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    marginTop: 10
  },
  paper: {
    maxWidth: 500,
    padding: 10
  }
};

const Introduction = props => (
  <div className={props.classes.div}>
    <Paper className={props.classes.paper} elevation={4}>
      <Typography color="secondary" variant="display1">
        Hello,
      </Typography>
      <Divider />
      <Typography color="secondary" paragraph variant="subheading">
        A few info about myself:
        <br />
        <br />
        My name is Szabolcs Forreiter and i LOVE coding!
        <br />
        I'm a former professional basketball player. I've played around 16 years
        (I feel old..).
        <br />
        Nowadays I spend less time on the court and more time in front of a PC
        or laptop.
        <br />
        Different sport but the same passion and excitement.
        <br />
        I'm a very competitive person, I mostly got that from growing up as the
        yungest child and I had to have a chip on my shoulder.
        <br />
        My competitiveness was raised to an other level when I've started to
        play basketball at a young age.
      </Typography>
    </Paper>
  </div>
);

Introduction.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Introduction);
