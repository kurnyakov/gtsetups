import React from 'react';
import { connect } from 'react-redux';
import clearError from '../../actions/error';

import ErrorBox from './ErrorBox';

class ErrorBoxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.closeError = this.closeError.bind(this);
  }

  closeError() {
    const { dispatch } = this.props;
    dispatch(clearError());
  }

  render() {
    const { errorStore } = this.props;
    return (
      <ErrorBox errorStore={errorStore} closeErrorFunction={this.closeError} />
    );
  }
}

function mapStateToProps(state) {
  return { errorStore: state.error };
}

export default connect(mapStateToProps)(ErrorBoxContainer);

ErrorBoxContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  errorStore: React.PropTypes.shape({
    error: React.PropTypes.shape({
      message: React.PropTypes.string,
    }),
    isError: React.PropTypes.bool.isRequired,
  }).isRequired,
};
