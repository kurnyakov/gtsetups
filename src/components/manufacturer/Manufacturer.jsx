import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';

import ManufacturerRow from './ManufacturerRow';
import ConfirmModal from '../shared/ConfirmModal';

export default class Manufacturer extends React.Component {
  constructor(props) {
    super(props);

    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCategoryCreate = this.handleCategoryCreate.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.state = {
      manufacturer: '',
      modalVisible: false,
      confirmVisible: false,
      manufacturerDelete: '',
    };
  }

  deleteManufacturer(id) {
    this.setState({
      manufacturerDelete: id,
      confirmVisible: true,
    });
  }

  handleManufacturerDelete() {
    const { deleteFunction } = this.props;
    deleteFunction(this.state.manufacturerDelete);
    this.setState({
      confirmVisible: false,
      manufacturerDelete: '',
    });
  }

  handleManufacturerChange(e) {
    this.setState({
      manufacturer: e.target.value,
    });
  }

  handleManufacturerCreate() {
    const { saveFunction } = this.props;
    const formData = { manufacturer: this.state.manufacturer };
    saveFunction(formData);
    this.setState({
      modalVisible: false,
      manufacturer: '',
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
    let tableRows;
    tableRows = listdata.map((data, i) => (
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      <ManufacturerRow
        key={data._id}
        id={data._id}
        number={i + 1}
        name={data.name}
        removefunc={this.deleteCategory}
      />
    ));
    
    if (!tableRows.length) {
      tableRows = (
        <tr><td colSpan="3" className="text-center">Nothing found</td></tr>
      );
    }
    return (
      <div className="col">
        <Table responsive className="table-condensed table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Manufacturer</th>
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
        >Add category</Button>
        <div>
          <Modal
            isOpen={this.state.modalVisible}
            toggle={this.toggleCreate}
          >
            <ModalHeader toggle={this.toggleCreate}>Add manufacturer</ModalHeader>
            <ModalBody>
              <AvForm onValidSubmit={this.handleManufacturerCreate}>
                <AvGroup>
                  <Label for="category">Manufacturer</Label>
                  <AvInput
                    id="category"
                    name="category"
                    placeholder="Manufacturer name"
                    onChange={this.handleCategoryChange}
                    required
                    type="text"
                    value={this.state.manufacturer}
                  />
                  <AvFeedback>A manufacturer name must be entered.</AvFeedback>
                </AvGroup>
                <Button
                  className="float-right"
                  color="secondary"
                  onClick={this.toggleCreate}
                >Cancel</Button>
                <Button className="float-right mx-2" color="primary">Add manufacturer</Button>
              </AvForm>
            </ModalBody>
          </Modal>
          <ConfirmModal
            isOpen={this.state.confirmVisible}
            toggleVisibilityFunc={this.toggleDelete}
            mainFunc={this.handleManufacturerDelete}
            headerText="Delete manufacturer"
            questionText="Are you sure?"
            confirmText="Delete manufacturer"
            cancelText="Cancel"
          />
        </div>
      </div>
    );
  }
}

Manufacturer.propTypes = {
  saveFunction: React.PropTypes.func.isRequired,
  deleteFunction: React.PropTypes.func.isRequired,
  listdata: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string,
  })).isRequired,
};
