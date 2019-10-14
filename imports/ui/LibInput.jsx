import React from "react";
import "./Game.css";

class LibInput extends React.Component {
  constructor(props) {
    super(props);
  }

  sendData = evt => {
    console.log(this.props);
    this.props.inputChange(evt.target.value, this.props.id);
  };

  render() {
    return (
      <input
        type="text"
        id={this.props.id}
        className={this.props.classType}
        onChange={this.sendData}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default LibInput;
