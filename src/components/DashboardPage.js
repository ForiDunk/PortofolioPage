import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Projects from './Projects';
import Introduction from './Introduction';
import Footer from './Footer';

const DashboardPage = () => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <Introduction />
    <Projects />
    <Footer />
  </React.Fragment>
);

export default DashboardPage;
