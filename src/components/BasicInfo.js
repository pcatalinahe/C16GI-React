// import "./styles.css";
import React from "react";

class BasicInfo extends React.Component {
  render() {
    const { name, number, dob } = this.props.person;
    return (
      <div className="people">
        <p>Name: {name}</p>
        <p>Phone Number: {number}</p>
        <p>Date of Birth: {dob}</p>
      </div>
    );
  }
}

export default BasicInfo;
