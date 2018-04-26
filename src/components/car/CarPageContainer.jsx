import React from 'react';
import { connect } from 'react-redux';
import { saveCar, getCar, deleteCar } from '../../actions/car';
import CarPage from './CarPage';

export class CarPageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.saveFunction = this.saveFunction.bind(this);
    this.deleteFunction = this.deleteFunction.bind(this);
  }

  componentWillMount() {
    this.getCarList();
  }

  getCarList() {
    const { dispatch } = this.props;
    dispatch(getCar());
  }

  saveFunction(userData) {
    const { dispatch } = this.props;
    dispatch(saveCar(userData));
  }

  deleteFunction(id) {
    const { dispatch } = this.props;
    dispatch(deleteCar(id));
  }

  render() {
    const { listdata } = this.props;
    return (
      <div className="row justify-content-center">
        <CarPage
          saveFunction={this.saveFunction}
          deleteFunction={this.deleteFunction}
          listdata={listdata}
          // isLoading={isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listdata: state.car.list,
});

CarPageContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  listdata: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps)(CarPageContainer);
