import React from 'react';

const Template = (props) => {
  const { current } = props;
  return (
    <span>{current}</span>
  );
};

Template.propTypes = {
  current: React.PropTypes.number.isRequired,
};

export default Template;
