import React from "react";
import Keg from "./Keg";

function KegList()  {
  return (
    <React.Fragment>
      <Keg
        name = "Hophoria"
        brand = "Evasion Brewery"
        price = "3"
        abv = "6.1"/>
      <Keg
        name = "Omission"
        brand = "Deschutes Brewery"
        price = "$4"
        abv = "5.1"/>
    </React.Fragment>
  );
}

export default KegList;