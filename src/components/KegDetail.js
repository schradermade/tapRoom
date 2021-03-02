import React from "react";
import PropTypes from "prop-types";

function KegDetail(props)  {
  const { keg } = props;

  
  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <table border=".5px solid black" width="60%">
        <thead>
          <tr>
            <th>Beer</th>
            <th>Brand</th>
            <th>ABV</th>
            <th>Price</th>
            <th>Pints Remaining</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{keg.name}</td>
            <td>{keg.brand}</td>
            <td>{keg.abv}</td>
            <td>{keg.price}</td>
            <td>{keg.count}</td>
            <td><button hidden={keg.count === 0} onClick={() => props.onKegPour(keg.id)}>Pour a Pint</button></td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onKegPour: PropTypes.func
}

export default KegDetail;