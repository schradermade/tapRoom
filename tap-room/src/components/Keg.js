import React from "react";
  import PropTypes from "prop-types";

function Keg(props)  {
  return (
    <React.Fragment>
      <h1>{props.name} - {props.brand}</h1>
      <h3>{props.abv}</h3>
      <p><em>{props.price}</em></p>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string
};

export default Keg;