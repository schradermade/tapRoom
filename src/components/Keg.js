import React from "react";
import PropTypes from "prop-types";

function Keg(props)  {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h1>{props.name} - {props.brand}</h1>
        <h3>{props.abv}</h3>
        <p><em>{props.price}</em></p>
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