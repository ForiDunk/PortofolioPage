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

function ProjectRPC(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://www.walldevil.com/wallpapers/a38/wallpaper-easiest-piece-gaming-7kocz.jpg"
          title="Rock-Paper-Scissors ilustrating image"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            ForiGame
          </Typography>
          <Typography component="p">
          Simple Rock-Paper-Scissors game, created in about 2-3 hours online to battle boredome.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://forigame.stackblitz.io/" target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProjectRPC.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectRPC);
