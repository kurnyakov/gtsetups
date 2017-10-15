import React from 'react';
// import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './home/HomePage';
import AddPostPage from './post/AddPostPage';

export default function Template() {
  // const { current, increase } = props;
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <section className="page-content container-fluid">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/addpost" component={AddPostPage} />
        </section>
      </div>
    </Router>
    /* <div>
      <Header />
      <section className="page-content container-fluid">
        <span>{current}</span>
      </section>
      <Button color="primary" onClick={increase}>Register</Button>
    </div> */
  );
}

Template.propTypes = {
  current: React.PropTypes.number.isRequired,
  increase: React.PropTypes.func.isRequired,
};
