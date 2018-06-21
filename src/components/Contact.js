import React from "react";
import CV from "./CV";
import {
  Avatar,
  Typography,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { SocialIcon } from 'react-social-icons';

const styles = {
  typograpth: {
    margin: 10
  },
  avatar: {
    width: 120,
    height: 120,
    margin: 10
  }
};

const Contact = props => (
  <SwipeableDrawer
    open={props.open}
    onOpen={props.onOpen}
    onClose={props.close}
  >
    <Avatar
      style={styles.avatar}
      alt="Szabolcs Forreiter"
      src="https://image.ibb.co/iLgtx8/2015_05_25_14_29_09_512.jpg"
    />
    <Typography
      style={styles.typograpth}
      variant="display1"
      color="primary"
    >
      Szabolcs Forreiter
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="GitHub" />
        <SocialIcon url="https://github.com/ForiDunk" />
      </ListItem>
      <Divider />
      <ListItem divider>
        <ListItemText primary="Facebook" />
        <SocialIcon url="https://www.facebook.com/forreiter.szabolcs" />
      </ListItem>
      <ListItem>
        <ListItemText primary="LinkedIn" />
        <SocialIcon url="https://www.linkedin.com/in/szabolcs-forreiter/" />
      </ListItem>
      <Divider light />
    </List>
    <CV />
  </SwipeableDrawer>
);

export default Contact;
