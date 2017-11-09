import React from 'react';
import { connect } from 'react-redux';
import { checkSession } from '../actions/authentication';

import Template from './Template';

class TemplateContainer extends React.Component {

  constructor(props) {
    super(props);
    this.checkUserSession = this.checkUserSession.bind(this);
  }

  componentWillMount() {
    this.checkUserSession();
  }

  checkUserSession() {
    const { dispatch } = this.props;
    dispatch(checkSession());
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Template isLoggedIn={isLoggedIn} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.authentication.isLoggedIn,
  };
}

TemplateContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(TemplateContainer);
