import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import ProjectsList from "./ProjectsList";
import Introduction from "./Introduction";
import Contact from "./Contact";

class DashboardPage extends React.Component {
  state = {
    open: false
  };

  handleOnClick = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
  handleOnClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header onClick={this.handleOnClick} />
        <Contact
          open={this.state.open} 
          close={this.handleOnClose}
        />
        <Introduction />
        <ProjectsList />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
