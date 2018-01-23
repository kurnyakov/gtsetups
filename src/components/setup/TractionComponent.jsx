import React from 'react';

export default function TractionComponent(props) {
  const { value } = props;
  return (
    <div className="setup-component">
      <div className="setup-component-header">
        <h5 className="setup-component-title">Traction</h5>
      </div>
      <div className="setup-component-body">
        <div className="form-inline">
          <div className="col-md-6 text-right">
            <small id="tractionHelp" className="text-muted">
              Traction
            </small>
          </div>
          <div className="col-md-6">
            <input
              type="number"
              id="traction"
              className="form-control w-100"
              aria-describedby="tractionHelp"
              placeholder="3"
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

TractionComponent.propTypes = {
  value: React.PropTypes.number.isRequired,
};

