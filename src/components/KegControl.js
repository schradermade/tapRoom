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
      //count: 160
    };
    // this.handlePouringSelectedKeg = this.handlePouringSelectedKeg.bind(this);
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
    if (this.selectedKeg.count >= 16) {
      const pouredMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      
      this.setState({
          count: count - 16,
          masterKegList: pouredMasterKegList,
          selectedKeg: null
    });

  };
}

  // handlePouringSelectedKeg = (ticketToEdit) => { // you are not taking in a full ticket object, instead just an id, so you need to use that id to access the masterKegList at the correct location
  //   const editedMasterTicketList = this.state.masterTicketList
  //     .filter(ticket => ticket.id !== this.state.selectedTicket.id)
  //     .concat(ticketToEdit);
  //   this.setState({
  //       masterTicketList: editedMasterTicketList,
  //       editing: false, // you don't have edit functionality, so this is irrelevant
  //       selectedTicket: null // you may want to stay on the details view, by setting this value to the new updated selectTicket data
  //     });
  // }

  render()  {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null)  {
      currentlyVisibleState = 
        <KegDetail
          keg = {this.state.selectedKeg}
          onKegPour= {this.handlePouringSelectedKeg} />
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
        {/* <button onClick = {this.handlePouringSelectedKeg}>Pour</button> */}
        {/* <h1>Ounces Remaining: {this.state.count}</h1> */}
      </React.Fragment>
    );
  }

}

export default KegControl;