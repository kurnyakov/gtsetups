import React from 'react';
import { AvForm, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, Table } from 'reactstrap';

export default class Category extends React.Component {
  constructor(props) {
    super(props);

    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      category: '',
    };
  }

  handleCategoryDelete(id) {
    const { deleteFunction } = this.props;
    deleteFunction(id);
  }

  handleCategoryChange(e) {
    this.state.category = e.target.value;
  }

  handleSubmit() {
    const { saveFunction } = this.props;
    const formData = this.state;
    saveFunction(formData);
  }

  render() {
    const { listdata } = this.props;
    const tableRows = listdata.map((data, i) => (
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      <tr key={data._id}>
        <td>{i + 1}</td>
        <td>{data.name}</td>
        <td>
          <Button
            color="primary"
            onClick={() => this.handleCategoryDelete(data._id)}
          >Remove</Button>
        </td>
      </tr>
    ));

    return (
      <div className="row justify-content-center">
        <Table responsive>
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
        <div className="col-10 col-sm-7 col-md-5 col-lg-4">
          <AvForm onValidSubmit={this.handleSubmit}>
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
            <Button color="primary">Add category</Button>
          </AvForm>
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
  })).isRequired, // TODO: must be changed!
};
