import React from 'react';
import { Button } from 'reactstrap';

export default class CategoryRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removefunc(this.props.id);
  }

  render() {
    const { number, name } = this.props;
    return (
      <tr>
        <td>{number}</td>
        <td>{name}</td>
        <td className="text-right">
          <Button
            onClick={this.handleClick}
          >Remove</Button>
        </td>
      </tr>
    );
  }
}

CategoryRow.propTypes = {
  number: React.PropTypes.number.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  removefunc: React.PropTypes.func.isRequired,
};
