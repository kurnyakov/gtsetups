import React from 'react';
import { Button } from 'reactstrap';

export default function CategoryRow(props) {
  const { number, name, removefunc } = props;
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td className="text-right">
        <Button
          onClick={removefunc}
        >Remove</Button>
      </td>
    </tr>
  );
}

CategoryRow.propTypes = {
  number: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  removefunc: React.PropTypes.func.isRequired,
};
