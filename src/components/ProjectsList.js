import React, { Fragment } from "react";
import { store } from "./store";
import ProjectCard from "./ProjectCard";
import { Paper, Switch, FormControlLabel } from "@material-ui/core";

const styles = {
  div: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap"
  }
};

class ProjectsList extends React.Component {
  state = {
    isHidden: true
  };

  handleChange = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <Fragment>
        <div style={styles.div}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange}
                color="secondary"
              />
            }
            label="Projects"
          />
        </div>
        <div style={styles.div}>
          {store.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              isHidden={this.state.isHidden}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ProjectsList;
