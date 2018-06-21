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

  handleOnOpen = () => {
    this.setState({ open: true });
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Contact
          open={this.state.open}
          onOpen={this.handleOnOpen}
          close={this.handleOnClose}
        />
        <button onClick={this.handleOnClick}>Contact</button>
        <Introduction />
        <ProjectsList />
      </React.Fragment>
    );
  }
}

export default DashboardPage;
