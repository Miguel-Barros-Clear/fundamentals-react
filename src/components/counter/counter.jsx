import React from "react";
import Buttons from "./buttons";
import "./counter.css";
import Display from "./display";
import ValueForm from "./valueForm";

export default class Counter extends React.Component {
  state = {
    number: this.props.initialNumber || 0,
    incValue: this.props.incValue || 5,
  };

  setInc = () => {
    this.setState({
      number: this.state.number + this.state.incValue,
    });
  };

  setDec = () => {
    this.setState({
      number: this.state.number - this.state.incValue,
    });
  };

  setIncValue = (e) => {
    this.setState({
      incValue: +e.target.value,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <ValueForm incValue={this.state.incValue} setValue={this.setIncValue} />
        <Buttons inc={this.setInc} dec={this.setDec} />
      </div>
    );
  }
}
