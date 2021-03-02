import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props)  {
  function handleNewKegFormSubmission(event)  {
    event.preventDefault();
    props.onNewKegCreation({ 
      name: event.target.name.value, 
      brand: event.target.brand.value,
      price: event.target.price.value, 
      abv: event.target.abv.value,
      count: parseInt(event.target.count.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input
          type = "text"
          name = "name"
          placeholder = "Beer Name"
          defaultValue = "Hophoria IPA" />
        <input
          type = "text"
          name = "brand"
          placeholder = "brand"
          defaultValue = "Evasion Brewing" />
        <input
          type = "text"
          name = "price"
          placeholder = "price"
          defaultValue = "$5" />
        <input
          type = "text"
          name = "abv"
          placeholder = "ABV"
          defaultValue = "6.1%" />
        <input
          type = "text"
          name = "count"
          placeholder = "Count"
          defaultValue = "3" />
        <button type="submit">Tap the Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;