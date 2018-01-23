import React from 'react';

function createTiresSelect(id, name, desc, value) {
  return (
    <select
      className="custom-select w-100"
      id={id}
      name={name}
      aria-describedby={desc}
      value={value}
    >
      <option value="1">Comfort: hard</option>
      <option value="2">Comfort: medium</option>
      <option value="3">Comfort: soft</option>
      <option value="4">Sports: hard</option>
      <option value="5">Sports: medium</option>
      <option value="6">Sports: soft</option>
      <option value="7">Racing: hard</option>
      <option value="8">Racing: medium</option>
      <option value="9">Racing: soft</option>
      <option value="10">Racing: Super soft</option>
      <option value="11">Racing: Intermediate</option>
      <option value="12">Racing: Heavy wet</option>
      <option value="13" disabled>Dirt tires</option>
      <option value="14" disabled>Snow tires</option>
    </select>
  );
}

export default function TiresComponent(props) {
  const { frontTires, rearTires } = props;
  return (
    <div className="setup-component">
      <div className="setup-component-header">
        <h5 className="setup-component-title">Tires</h5>
      </div>
      <div className="setup-component-body">
        <div className="form-inline">
          <div className="col-md-6 text-center">
            <small id="frontTiresHelp" className="text-muted">
              Front tires
            </small>
            {createTiresSelect('frontTiresSelect', 'frontTiresSelect', 'frontTiresHelp', frontTires)}
          </div>
          <div className="col-md-6 text-center">
            <small id="rearTiresHelp" className="text-muted">
              Rear tires
            </small>
            {createTiresSelect('reariresSelect', 'rearTiresSelect', 'rearTiresHelp', rearTires)}
          </div>
        </div>
      </div>
    </div>
  );
}

TiresComponent.propTypes = {
  frontTires: React.PropTypes.number.isRequired,
  rearTires: React.PropTypes.number.isRequired,
};
