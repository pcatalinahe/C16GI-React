import "./styles.css";
import React, { Component } from "react";
import BasicInfo from "./components/BasicInfo"; // Import the basic info component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { name: "Catalina Perez", number: "123-123-1230", dob: "06/02/2001" },
        { name: "Ivonne Perez", number: "123-456-7890", dob: "27/05/2002" },
        { name: "Irwin Laris", number: "111-222-333", dob: "06/13/2001" },
      ],
    };
  }

  render() {
    const peopleList = this.state.people.map((person, index) => (
      <BasicInfo key={index} person={person} />
    ));
    return (
      <>
        <h1>Contact List</h1>
        {peopleList}
        <button id="contact">Add Contact</button>
      </>
    );
  }
}

export default App;
