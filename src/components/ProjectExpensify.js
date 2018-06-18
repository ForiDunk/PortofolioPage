import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function ProjectExpensify(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1512075045244-436869aac75b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae78c378f217d4c7cb9f2856af7981c9&auto=format&fit=crop&w=1897&q=80 "
          title="Money"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Fori-Expensify
          </Typography>
          <Typography component="p">
          It's time to get your expenses under control! Monitor your expenses with Fori-Expensify.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://fori-expensify.herokuapp.com/" target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProjectExpensify.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectExpensify);
