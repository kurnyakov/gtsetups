import React from 'react';
import { connect } from 'react-redux';
import { saveCategory, getCategory, deleteCategory } from '../../actions/category';
import CategoryPage from './Category';

export class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.saveFunction = this.saveFunction.bind(this);
    this.deleteFunction = this.deleteFunction.bind(this);
  }

  componentWillMount() {
    this.getCategories();
  }

  getCategories() {
    const { dispatch } = this.props;
    dispatch(getCategory());
  }

  saveFunction(userData) {
    const { dispatch } = this.props;
    dispatch(saveCategory(userData));
  }

  deleteFunction(id) {
    const { dispatch } = this.props;
    dispatch(deleteCategory(id));
  }

  render() {
    const { listdata } = this.props;
    return (
      <div className="row justify-content-center">
        <CategoryPage
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
  listdata: state.category.list,
  // isLoading: state.category.isLoading,
});

CategoryContainer.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  listdata: React.PropTypes.arrayOf(React.PropTypes.shape({
    _id: React.PropTypes.string,
    name: React.PropTypes.string,
  })).isRequired,
  // isLoading: React.PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(CategoryContainer);
