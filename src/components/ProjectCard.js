import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Slide,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  card: {
    maxWidth: 300,
    marginTop: 20,
    marginBottom: 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

const ProjectCard = ({ project, isHidden, ...props }) => (
  <div>
    <Slide
      direction="down"
      mountOnEnter
      unmountOnExit
      in={!isHidden}
      {...(!isHidden ? { timeout: 1000 } : { timeout: 1000 })}
    >
      <Card raised className={props.classes.card}>
        <CardMedia className={props.classes.media} image={project.image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            color="secondary"
            component="h2"
          >
            {project.title}
          </Typography>
          <Typography color="secondary" component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href={project.url}
            target="_blank"
            variant="outlined"
            color="secondary"
          >
            Check out
          </Button>
        </CardActions>
      </Card>
    </Slide>
  </div>
);

ProjectCard.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProjectCard);
