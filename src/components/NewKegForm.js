import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props)  {
  function handleNewKegFormSubmission(event)  {
    event.preventDefault();
    props.onNewKegCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, id: v4() });
  }

  return (
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input
          type = "text"
          name = "name"
          placeholder = "Beer Name"
          value = "Hophoria IPA" />
        <input
          type = "text"
          name = "brand"
          placeholder = "brand"
          value = "Evasion Brewing" />
        <input
          type = "text"
          name = "price"
          placeholder = "price"
          value = "$5" />
        <input
          type = "text"
          name = "abv"
          placeholder = "ABV"
          value = "6.1%" />
        <button type="submit">Tap the Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;