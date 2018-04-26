import React from 'react';
import { Button } from 'reactstrap';

export default class CarRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.removefunc(this.props.id);
  }

  render() {
    const { number, name, category, manufacturer, year, price } = this.props;
    return (
      <tr>
        <td>{number}</td>
        <td>{name}</td>
        <td>{category}</td>
        <td>{manufacturer}</td>
        <td>{year}</td>
        <td>{price}</td>
        <td className="text-right">
          <Button
            onClick={this.handleClick}
          >Remove</Button>
        </td>
      </tr>
    );
  }
}

CarRow.propTypes = {
  number: React.PropTypes.number.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  category: React.PropTypes.string.isRequired,
  manufacturer: React.PropTypes.string.isRequired,
  year: React.PropTypes.number.isRequired,
  price: React.PropTypes.number.isRequired,
  removefunc: React.PropTypes.func.isRequired,
};
