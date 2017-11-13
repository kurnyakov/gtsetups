import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import CategoryRow from './CategoryRow';

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCategoryCreate = this.handleCategoryCreate.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.state = {
      category: '',
      modalVisible: false,
      confirmVisible: false,
      categoryDelete: '',
    };
  }

  deleteCategory(id) {
    this.setState({
      categoryDelete: id,
      confirmVisible: true,
    });
  }

  handleCategoryDelete() {
    const { deleteFunction } = this.props;
    deleteFunction(this.state.categoryDelete);
    this.setState({
      confirmVisible: false,
      categoryDelete: '',
    });
  }

  handleCategoryChange(e) {
    this.setState({
      category: e.target.value,
    });
  }

  handleCategoryCreate() {
    const { saveFunction } = this.props;
    const formData = { category: this.state.category };
    saveFunction(formData);
    this.setState({
      modalVisible: false,
      category: '',
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
    /* if (isLoading) {
      tableRows = (
        <tr><td colSpan="3" className="text-center">Loading...</td></tr>
      );
    } else { */
    tableRows = listdata.map((data, i) => (
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      <CategoryRow
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
    // }
    return (
      <div className="col">
        <Table responsive className="table-condensed table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
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
            <ModalHeader toggle={this.toggleCreate}>Add category</ModalHeader>
            <ModalBody>
              <AvForm onValidSubmit={this.handleCategoryCreate}>
                <AvGroup>
                  <Label for="category">Category</Label>
                  <AvInput
                    id="category"
                    name="category"
                    placeholder="Category name"
                    onChange={this.handleCategoryChange}
                    required
                    type="text"
                    value={this.state.category}
                  />
                  <AvFeedback>A category name must be entered.</AvFeedback>
                </AvGroup>
                <Button
                  className="float-right"
                  color="secondary"
                  onClick={this.toggleCreate}
                >Cancel</Button>
                <Button className="float-right mx-2" color="primary">Add category</Button>
              </AvForm>
            </ModalBody>
          </Modal>
          <Modal
            isOpen={this.state.confirmVisible}
            toggle={this.toggleDelete}
          >
            <ModalHeader toggle={this.toggleDelete}>Delete category</ModalHeader>
            <ModalBody>Are you sure?</ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleCategoryDelete}>Delete category</Button>{' '}
              <Button color="secondary" onClick={this.toggleDelete}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  saveFunction: React.PropTypes.func.isRequired,
  deleteFunction: React.PropTypes.func.isRequired,
  listdata: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string,
  })).isRequired,
  // isLoading: React.PropTypes.bool.isRequired,
};
