import React from "react";
import { Avatar, Typography, withStyles, IconButton } from "@material-ui/core";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/lib/fa";

const styles = {
  div: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: 130,
    marginBottom: 130,
    maxWidth: 500
  },
  avatar: {
    width: 240,
    height: 240,
    marginBottom: 50,
    marginTop: 10
  },
  text: {
    margin: 10
  },
  toProjectsText: {
    marginTop: 40,
    marginBottom: 20
  },
  mainText: {
    margin: 30
  },
  friends: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 700
  }
};

const Introduction = props => (
  <div className={props.classes.div}>
    <Avatar
      className={props.classes.avatar}
      alt="Szabolcs Forreiter"
      src="https://image.ibb.co/iLgtx8/2015_05_25_14_29_09_512.jpg"
    />
    <Typography
      className={props.classes.mainText}
      color="secondary"
      variant="headline"
    >
      Hello, let me introduce myself:
    </Typography>

    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      My name is Szabolcs Forreiter and I LOVE coding!
      <br />
      <br />
      I am a former professional basketball player and I've played around 16
      years (I feel old...). Nowadays I spend less time on the court and more
      time in front of a PC or a laptop.
      <br />
      Different sport but the same passion and focus.
      <br />
      I am a very competitive person, I mostly got that from growing up as the
      youngest child. My competitiveness was raised to an other level when I
      started to play basketball at a young age.
      <br />
      We only live once, so why not go after the things you want in life.
    </Typography>
    <Typography className={props.classes.toProjectsText} variant="subheading">
      Below you can find some of my projects
    </Typography>
    <IconButton size="large" onClick={props.onClick}>
      <FaChevronDown />
    </IconButton>
  </div>
);

Introduction.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Introduction);
