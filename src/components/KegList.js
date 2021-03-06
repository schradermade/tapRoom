import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props)  {
  return (
    <React.Fragment>
      {props.kegList.map((keg)  =>
        <Keg
            whenKegClicked = { props.onKegSelection }
            whenKegPoured = {props.onKegPour}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            count={keg.count}
            id={keg.id}
            key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onKegPour: PropTypes.func
};

export default KegList;