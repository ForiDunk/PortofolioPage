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
    width: 60,
    height: 60,
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
      alt="Adelle Charles"
      src="https://uploads.codesandbox.io/uploads/user/88e6954e-f7dd-42b7-b1b4-dcc3d4b18694/lRqF-download.jpg"
    />
    <Typography
      style={styles.typograpth}
      variant="headline"
      color="inherit"
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
