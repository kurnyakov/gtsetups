import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Template from './Template';
import { testAction } from '../actions/test';

class TemplateContainer extends React.Component {

  componentWillMount() {
    const testAction2 = this.props.testAction2;
    testAction2();
  }

  render() {
    const { test, testAction2 } = this.props;
    return (
      <Template current={test} increase={testAction2} />
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    testAction2: testAction,
  }, dispatch);
}

TemplateContainer.propTypes = {
  test: React.PropTypes.number.isRequired,
  testAction2: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateContainer);
