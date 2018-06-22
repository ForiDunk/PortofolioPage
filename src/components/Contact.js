import React from "react";
import CV from "./CV";
import {
  Avatar,
  Typography,
  SwipeableDrawer,
  Divider,
  withStyles
} from "@material-ui/core";
import { SocialIcon } from "react-social-icons";
import PropTypes from "prop-types";

const styles = {
  typograpth: {
    margin: 5
  },
  links: {
    textDecoration: "none"
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginTop: 5
  },
  socialIcon: {
    height: 20,
    width: 20,
    margin: 5
  },
  divider: {
    marginBottom: 20
  }
};

const Contact = props => (
  <SwipeableDrawer
    open={props.open}
    onOpen={props.onOpen}
    onClose={props.close}
  >
    <Avatar
      className={props.classes.avatar}
      alt="Szabolcs Forreiter"
      src="https://image.ibb.co/iLgtx8/2015_05_25_14_29_09_512.jpg"
    />
    <Typography
      className={props.classes.typograpth}
      variant="headline"
      color="secondary"
      divider
    >
      Szabolcs Forreiter
    </Typography>
    <Divider className={props.classes.divider} />
    <Typography
      className={props.classes.links}
      href="https://github.com/ForiDunk"
      target="_blank"
      component="a"
    >
      <SocialIcon style={styles.socialIcon} url="https://github.com/ForiDunk" />
      GitHub
    </Typography>

    <Typography
      className={props.classes.links}
      href="https://www.facebook.com/forreiter.szabolcs"
      target="_blank"
      component="a"
    >
      <SocialIcon
        style={styles.socialIcon}
        url="https://www.facebook.com/forreiter.szabolcs"
      />
      Facebook
    </Typography>

    <Typography
      className={props.classes.links}
      href="https://www.linkedin.com/in/szabolcs-forreiter/"
      target="_blank"
      component="a"
    >
      <SocialIcon
        style={styles.socialIcon}
        url="https://www.linkedin.com/in/szabolcs-forreiter/"
      />
      LinkedIn
    </Typography>

    <CV />
  </SwipeableDrawer>
);

Contact.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
