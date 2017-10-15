import React from 'react';
import { Button } from 'reactstrap';
import Header from './shared/Header';

export default function Template(props) {
  const { current, increase } = props;
  return (
    <div>
      <Header />
      <section className="page-content container-fluid">
        <span>{current}</span>
      </section>
      <Button color="primary" onClick={increase}>Register</Button>
    </div>
  );
}

Template.propTypes = {
  current: React.PropTypes.number.isRequired,
  increase: React.PropTypes.func.isRequired,
};
