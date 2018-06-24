import React, { Fragment } from "react";
import { store } from "./store";
import ProjectCard from "./ProjectCard";
import { withStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: 600,
    marginTop: 10,
    marginBottom: 20
  },
  title: {
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'center'
  }
};

const ProjectsList = (props) => (
  <Fragment>
      <Typography className={props.classes.title} variant="display2" color="secondary">Below you can find some of my projects:</Typography>
    <div className={props.classes.div}>
      {store.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
        />
      ))}
    </div>
  </Fragment>
);

ProjectsList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProjectsList);
