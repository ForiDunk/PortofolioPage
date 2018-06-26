import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import ProjectsList from "./ProjectsList";
import Introduction from "./Introduction";
import Contact from "./Contact";
import LandingPage from "./LandingPage";

class DashboardPage extends React.Component {
  state = {
    open: false,
    landing: true
  };

  handleLanding = () => {
    this.setState({ landing: false });
  };

  handleOnClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  handleOnClose = () => {
    this.setState({ open: false });
  };

  render() {
    {
      if (this.state.landing) {
        return <LandingPage onClick={this.handleLanding} />;
      } else {
        return (
          <React.Fragment>
            <CssBaseline />
            <Header onClick={this.handleOnClick} />
            <Contact open={this.state.open} close={this.handleOnClose} />
            <Introduction />
            <ProjectsList />
          </React.Fragment>
        );
      }
    }
  }
}

export default DashboardPage;
