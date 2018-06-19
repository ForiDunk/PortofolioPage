import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';

const styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  typograpth: {
    margin: 10
  }
};

const Header = () => (
  <div >
    <AppBar position="static" color="primary">
      <Toolbar style={styles.toolBar}>
        <Typography style={styles.typograpth} variant="display4" color="inherit">
          Szabolcs Forreiter
        </Typography>
        <Typography style={styles.typograpth} variant="display1" color="inherit">A former pro athelete and soon to be web developer</Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
