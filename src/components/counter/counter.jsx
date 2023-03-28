import React from "react";
import "./counter.css";

export default class Counter extends React.Component {
  state = {
    number: this.props.initialNumber || 0,
    incValue: this.props.incValue || 5,
  };

  inc() {
    this.setState({
      number: this.state.number + this.state.incValue,
    });
  }

  dec() {
    this.setState({
      number: this.state.number - this.state.incValue,
    });
  }

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <p>{this.state.number}</p>
        <div>
          <p>Passo</p>
          <input
            id="incValue"
            type="number"
            onChange={(e) => {
              this.setState({
                incValue: +e.target.value,
              });
            }}
            value={this.state.incValue}
          />
        </div>
        <button onClick={() => this.inc()}>+</button>
        <button onClick={() => this.dec()}>-</button>
      </div>
    );
  }
}
