import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      count: 124
    };
    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) =>  {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    console.log("this is it");
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handlePouringSelectedKeg = (id) => {
    console.log("pour a pint");
  }

  render()  {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null)  {
      currentlyVisibleState = 
        <KegDetail
          keg = {this.state.selectedKeg} />
          buttonText = "Return to Keg List";
      
    } else if (this.state.formVisibleOnPage)  {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList  kegList = {this.state.masterKegList} 
                                        //onKegSelection = {this.handleChangingSelectedKeg} 
                                        onKegPour = {this.handlePouringSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
        <button onClick = {this.decrement}>Pour</button>
        <h1>Ounces Remaining: {this.state.count}</h1>
      </React.Fragment>
    );
  }

}

export default KegControl;