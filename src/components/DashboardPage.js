import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import ProjectsList from "./ProjectsList";
import Introduction from "./Introduction";
import Contact from "./Contact";
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
    justifyContent: 'center',
    backgroundImage: 'url("https://images.unsplash.com/photo-1519916340768-6710a9735b10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35b2c20156e954012d1cafe1c24c36dd&auto=format&fit=crop&w=1350&q=80")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center'
  }
};

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
  };

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
          <div className={this.props.classes.div}>
            <CssBaseline />
            <Header onClick={this.handleOnClick} />
            <Contact open={this.state.open} close={this.handleOnClose} />
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

