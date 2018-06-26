import React from "react";
import { Avatar, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    margin: 30
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    margin: 10
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
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      I am a former professional basketball player and I've played around 16
      years (I feel old...).
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      Nowadays I spend less time on the court and more time in front of a PC or
      a laptop.
    </Typography>
    <Typography
      className={props.classes.mainText}
      color="secondary"
      variant="headline"
    >
      Different sport but the same passion and focus.
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      I am a very competitive person, I mostly got that from growing up as the
      youngest child.
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      My competitiveness was raised to an other level when I started to play
      basketball at a young age.
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      I feel lucky that on my journey I've met a LOT of interesting people and
      all of them had a huge impanct on becoming who I am.
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      We only live once, so why not go after the things you want in life.
    </Typography>
  </div>
);

Introduction.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Introduction);
