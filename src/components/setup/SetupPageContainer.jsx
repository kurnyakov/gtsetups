import React from 'react';
import { connect } from 'react-redux';

import BrakesComponent from './BrakesComponent';
import TractionComponent from './TractionComponent';
import TiresComponent from './TiresComponent';

export function SetupPageContainer(props) {
  const { traction, brakes, frontTires, rearTires } = props;
  return (
    <div>
      <TractionComponent value={traction} />
      <TiresComponent frontTires={frontTires} rearTires={rearTires} />
      <BrakesComponent value={brakes} />
    </div>
  );
}

const mapStateToProps = state => ({
  traction: state.setup.traction,
  brakes: state.setup.brakes,
  frontTires: state.setup.frontTires,
  rearTires: state.setup.rearTires,
});

export default connect(mapStateToProps)(SetupPageContainer);

SetupPageContainer.propTypes = {
  traction: React.PropTypes.number.isRequired,
  frontTires: React.PropTypes.number.isRequired,
  rearTires: React.PropTypes.number.isRequired,
  brakes: React.PropTypes.number.isRequired,
};
