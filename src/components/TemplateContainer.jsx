import React from 'react';
import { connect } from 'react-redux';
import Template from './Template';

const TemplateContainer = (props) => {
  const test = props.test;
  return (
    <Template current={test} />
  );
};

function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

TemplateContainer.propTypes = {
  test: React.PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(TemplateContainer);
