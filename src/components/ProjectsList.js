import React, { Fragment } from "react";
import { store } from "./store";
import ProjectCard from "./ProjectCard";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

const ProjectsList = (props) => (
  <Fragment>
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
