import React from "react";
import { Button, Tooltip, Typography } from "@material-ui/core";
import FileDownload from '@material-ui/icons/FileDownload';;

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
      You can download my CV by clicking on the icon below:
    </Typography>
    <Tooltip title="Download CV">
      <Button style={styles.button} size="small" color="secondary">
      <FileDownload />
      </Button>
    </Tooltip>
  </div>
);
