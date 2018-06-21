import React from "react";
import { Paper, Typography } from "@material-ui/core";

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

const Introduction = () => (
  <div style={styles.div}>
    <Paper style={styles.paper} elevation={4}>
      <Typography color="secondary" variant="headline">
        Hello!
      </Typography>
      <Typography color="secondary" variant="subheading">
        All good things start out you challanging yourself...
      </Typography>
      <Typography color="secondary" variant="subheading">
        ...like "I wonder if I can learn to code..."
      </Typography>
      <Typography color="secondary" variant="subheading">
        ...than you try...
      </Typography>
      <Typography color="secondary" variant="subheading">
        ...and people say "you can't..."
      </Typography>
      <Typography color="secondary" variant="title">
        ...and after like a year of constant learning, I present you my
        portofolio page.
      </Typography>
    </Paper>
  </div>
);

export default Introduction;
