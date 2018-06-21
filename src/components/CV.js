import React from "react";
import { Button, Tooltip, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 20
  }
};

export default () => (
  <div style={styles.div}>
    <Typography variant="headline">Thank you for visiting my page!</Typography>
    <Typography variant="caption">
      You can download my CV by clicking on the button below:
    </Typography>
    <Tooltip title="Download CV">
      <Button variant="fab" color="secondary" aria-label="add">
        <AddIcon />
      </Button>
    </Tooltip>
  </div>
);
