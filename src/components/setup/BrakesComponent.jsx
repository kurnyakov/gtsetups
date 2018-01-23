import React from 'react';

export default class BrakesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleSearchChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="setup-component">
        <div className="setup-component-header">
          <h5 className="setup-component-title">Brakes</h5>
        </div>
        <div className="setup-component-body">
          <div className="form-inline">
            <div className="col-md-6 text-right">
              <small id="brakesHelp" className="text-muted">
                Brake Balance (Front/Rear)
              </small>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                id="brakes"
                onChange={this.handleSearchChange}
                className="form-control w-100"
                aria-describedby="brakesHelp"
                placeholder="0"
                value={this.state.value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BrakesComponent.propTypes = {
  value: React.PropTypes.number.isRequired,
};
