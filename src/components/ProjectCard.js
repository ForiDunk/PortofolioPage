import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Slide
} from "@material-ui/core";

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

const ProjectCard = ({ project, isHidden }) => (
  <div>
    <Slide
      direction="down"
      mountOnEnter
      unmountOnExit
      in={!isHidden}
      {...(!isHidden ? { timeout: 1000 } : { timeout: 1000 })}
    >
      <Card raised style={styles.card}>
        <CardMedia style={styles.media} image={project.image} />
        <CardContent>
          <Typography gutterBottom variant="headline" color="secondary" component="h2">
            {project.title}
          </Typography>
          <Typography color="secondary" component="p">{project.description}</Typography>
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

export default ProjectCard;
