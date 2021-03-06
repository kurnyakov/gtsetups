import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { logUserIn } from '../../actions/authentication';

import LoginPage from './LoginPage';

export class LoginPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.logUserInFunction = this.logUserInFunction.bind(this);
  }

  logUserInFunction(userData) {
    const { dispatch } = this.props;
    dispatch(logUserIn(userData));
  }

  render() {
    /* const { authentication } = this.props;

     if (authentication.isLoggedIn) {
      return (
        <Redirect to="/" />
      );
    } */

    return (
      <div>
        <LoginPage loginFunction={this.logUserInFunction} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication,
});

LoginPageContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LoginPageContainer);
