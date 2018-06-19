import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';


const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'center'
  },
  typograpth: {
    margin: 10
  }
}

const Footer = () => (
<AppBar position="static" color="primary">
      <Toolbar style={styles.toolbar}>
        <Typography style={styles.typograpth} variant="subheading" color="inherit">
          GitHub
        </Typography>
        <Typography style={styles.typograpth} variant="subheading" color="inherit">
          Facebook
        </Typography>
        <Typography style={styles.typograpth} variant="subheading" color="inherit">
          LinkedIn
        </Typography>
      </Toolbar>
    </AppBar>
);

export default Footer;