import React from 'react';
import LoginPage from '../account/LoginPageContainer';

export default function HomePage(props) {
  // TODO: Refactor this!
  const { isLoggedIn, isLoggingIn } = props;
  if (isLoggingIn) {
    return (
      <span>Loading...</span>
    );
  }

  if (isLoggedIn) {
    return (
      <span>Feed!</span>
    );
  }
  return (
    <LoginPage />
  );
}

HomePage.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
  isLoggingIn: React.PropTypes.bool.isRequired,
};
