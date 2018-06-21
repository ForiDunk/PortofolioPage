import React from "react";
import { AppBar, Avatar, Toolbar, Typography } from "@material-ui/core";

const styles = {
  toolBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  typograpth: {
    margin: 10
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 10
  }
};

const Header = () => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar style={styles.toolBar}>
        <Avatar
          style={styles.avatar}
          alt="Adelle Charles"
          src="https://uploads.codesandbox.io/uploads/user/88e6954e-f7dd-42b7-b1b4-dcc3d4b18694/lRqF-download.jpg"
        />
        <Typography
          style={styles.typograpth}
          variant="display2"
          color="inherit"
        >
          Szabolcs Forreiter
        </Typography>
        <Typography
          style={styles.typograpth}
          variant="subheading"
          color="inherit"
        >
          A former pro athelete and soon to be web developer
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
