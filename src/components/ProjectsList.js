import React, { Fragment } from "react";
import { store } from "./store";
import ProjectCard from "./ProjectCard";
import { Switch, FormControlLabel, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap"
  }
};

class ProjectsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true
    };
  }

  handleChange = props => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <Fragment>
        <div className={this.props.classes.div}>
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

ProjectsList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProjectsList);
