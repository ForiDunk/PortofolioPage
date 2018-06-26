import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import ProjectsList from "./ProjectsList";
import Introduction from "./Introduction";
import LandingPage from "./LandingPage";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  };

  state = {
    landing: true
  };

  handleLanding = () => {
    this.setState({ landing: false });
  };

  render() {
    {
      if (this.state.landing) {
        return <LandingPage onClick={this.handleLanding} />;
      } else {
        return (
          <div className={this.props.classes.div}>
            <CssBaseline />
            <Header />
            <Introduction />
            <ProjectsList />
          </div>
        );
      }
    }
  }
}

DashboardPage.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DashboardPage);

