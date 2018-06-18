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

function ProjectYelpCamp(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1518062304627-5532ae8c3ff2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3acc6e76323327d75c0eb9d3d623d1d&auto=format&fit=crop&w=1936&q=80"
          title="A crouded campsite"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Fori-YelpCamp
          </Typography>
          <Typography component="p">
          Create an account, share campsites you've visited or check out and comment on other's campsites.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://safe-island-56168.herokuapp.com/" target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProjectYelpCamp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectYelpCamp);
