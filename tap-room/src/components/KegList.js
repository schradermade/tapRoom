import React from "react";
import Keg from "./Keg";

const masterTicketList = [
  {
    name: "Hophoria",
    brand: "Evasion Brewery",
    price: "$3",
    abv: "6.1"
  },
  {
    name: "GF IPA",
    brand: "GroundBreaker",
    price: "$4",
    abv: "5.0"
  },
  {
    name: "Omission",
    brand: "Deschutes Brewery",
    price: "$3.50",
    abv: "4.5"
  }
];

function KegList()  {
  return (
    <React.Fragment>
      <hr/>
      {masterTicketList.map((keg, index)  =>
        <Keg  name={keg.name}
              brand={keg.brand}
              price={keg.price}
              abv={keg.abv}
              key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegList;