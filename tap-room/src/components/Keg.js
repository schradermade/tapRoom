import React from "react";

function Keg(props)  {
  const name = "Evasion";
  return (
    <React.Fragment>
      <h1>{props.name} - {props.brand}</h1>
      <h3>{props.abv}</h3>
      <p><em>{props.price}</em></p>
    </React.Fragment>
  );
}

export default Keg;