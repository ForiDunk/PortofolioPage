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

<a className="list-item" href="https://fori-indecision.herokuapp.com/" target="_blank">
<div>
  <h3 className="list-item__title">Fori-Indecision</h3>
</div>
<span className="list-item__sub-title">Put your life in the hands of a computer, let him decide for you what to do.</span>
</a>

function ProjectWeather(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/uploads/1412455906842d646f1ce/7bf17d33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=211a80c5e97e8292b43a36d76ccfd0ec&auto=format&fit=crop&w=1955&q=80"
          title="Clouds"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Fori-Weather
          </Typography>
          <Typography component="p">
          Find out the weather conditions all around the world (not optimizes for mobile yet...)
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="https://fori-weather.herokuapp.com/" target="_blank">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProjectWeather.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectWeather);
