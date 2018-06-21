import React from "react";
import CV from "./CV";
import {
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const Contact = props => (
  <SwipeableDrawer
    open={props.open}
    onOpen={props.onOpen}
    onClose={props.close}
  >
    <List>
      <ListItem button>
        <ListItemText primary="GitHub" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Facebook" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="LinkedIn" />
      </ListItem>
      <Divider light />
    </List>
    <CV />
  </SwipeableDrawer>
);

export default Contact;
