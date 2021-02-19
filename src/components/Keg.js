import React from "react";
import PropTypes from "prop-types";

function Keg(props)  {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <table border=".5px solid black" width="60%">
        <thead>
          <tr>
            <th>Beer</th>
            <th>Brand</th>
            <th>ABV</th>
            <th>Price</th>
            <th>Pints Remaining</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.brand}</td>
            <td>{props.abv}</td>
            <td>{props.price}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;