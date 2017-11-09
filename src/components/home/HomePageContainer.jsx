import React from 'react';

import { connect } from 'react-redux';
import HomePage from './HomePage';

export function HomePageContainer(props) {
  const { isLoggedIn, isLoggingIn } = props;
  return (
    <HomePage isLoggedIn={isLoggedIn} isLoggingIn={isLoggingIn} />
  );
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authentication.isLoggedIn,
    isLoggingIn: state.authentication.isLoggingIn,
  };
}

HomePageContainer.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
  isLoggingIn: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomePageContainer);
