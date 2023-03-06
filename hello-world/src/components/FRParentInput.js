import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); //step1
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    return this.inputRef.current.focus(); //step4
  }
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} /> //step2
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
