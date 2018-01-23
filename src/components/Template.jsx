import React from 'react';
// import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBox from './shared/ErrorBoxContainer';
import Header from './shared/Header';
import HomePage from './home/HomePageContainer';
import Category from './category/CategoryContainer';
import Setup from './setup/SetupPageContainer';

export default function Template() {
  // const { isLoggedIn } = props;
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <section className="page-content container-fluid">
          <ErrorBox />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/setup" component={Setup} />
        </section>
      </div>
    </Router>
  );
}

/* Template.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
}; */
