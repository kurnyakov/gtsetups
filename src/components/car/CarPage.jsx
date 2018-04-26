import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, Modal, ModalHeader, ModalBody, Table, Input } from 'reactstrap';
import CarRow from './CarRow';
import ConfirmModal from '../shared/ConfirmModal';

export default class CarPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleCarDelete = this.handleCarDelete.bind(this);
    this.handleCarChange = this.handleCarChange.bind(this);
    this.handleCarCreate = this.handleCarCreate.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.state = {
      car: '',
      carCategory: '',
      modalVisible: false,
      confirmVisible: false,
      carDelete: '',
    };
  }

  deleteCar(id) {
    this.setState({
      carDelete: id,
      confirmVisible: true,
    });
  }

  handleCarDelete() {
    const { deleteFunction } = this.props;
    deleteFunction(this.state.carDelete);
    this.setState({
      confirmVisible: false,
      carDelete: '',
    });
  }

  handleCarCreate() {
    const { saveFunction } = this.props;
    const formData = { car: this.state.car, category: this.state.carCategory };
    saveFunction(formData);
    this.setState({
      modalVisible: false,
      car: '',
      carCategory: '',
    });
  }

  handleCarChange(e) {
    this.setState({
      car: e.target.value,
    });
  }

  handleCarCategoryChange(e) {
    this.setState({
      carCategory: e.target.value,
    });
  }

  toggleCreate() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  toggleDelete() {
    this.setState({
      confirmVisible: !this.state.confirmVisible,
    });
  }

  render() {
    const { listdata } = this.props;
    let tableRows = listdata.map((data, i) => (
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      <CarRow
        key={data._id}
        id={data._id}
        number={i + 1}
        name={data.name}
        removefunc={this.deleteCar}
      />
    ));
    if (!tableRows.length) {
      tableRows = (
        <tr><td colSpan="3" className="text-center">Nothing found</td></tr>
      );
    }
    // }
    return (
      <div className="col">
        <Table responsive className="table-condensed table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Car</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
        <Button
          className="float-right"
          color="primary"
          onClick={this.toggleCreate}
        >New car</Button>
        <div>
          <Modal
            isOpen={this.state.modalVisible}
            toggle={this.toggleCreate}
          >
            <ModalHeader toggle={this.toggleCreate}>New car</ModalHeader>
            <ModalBody>
              <AvForm onValidSubmit={this.handleCarCreate}>
                <AvGroup>
                  <Label for="car">Car name</Label>
                  <AvInput
                    id="car"
                    name="car"
                    placeholder="Car name"
                    onChange={this.handleCarChange}
                    required
                    type="text"
                    value={this.state.car}
                  />
                  <AvFeedback>A car name must be entered.</AvFeedback>
                </AvGroup>
                <Input
                  type="select"
                  id="carCategory"
                  value={this.state.carCategory}
                  onChange={this.handleCarCategoryChange}
                >
                  <option>XXX</option>
                </Input>
                <Button
                  className="float-right"
                  color="secondary"
                  onClick={this.toggleCreate}
                >Cancel</Button>
                <Button className="float-right mx-2" color="primary">Add car</Button>
              </AvForm>
            </ModalBody>
          </Modal>
          <ConfirmModal
            isOpen={this.state.confirmVisible}
            toggleVisibilityFunc={this.toggleDelete}
            mainFunc={this.handleCarDelete}
            headerText="Delete car"
            questionText="Are you sure?"
            confirmText="Delete car"
            cancelText="Cancel"
          />
        </div>
      </div>
    );
  }
}

CarPage.propTypes = {
  saveFunction: React.PropTypes.func.isRequired,
  deleteFunction: React.PropTypes.func.isRequired,
  listdata: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string,
  })).isRequired,
};
