import React, { Component } from "react";

class Counter extends Component {
  state = {
    isLabeled: false,
  };
  render() {
    return (
      <div>
        {this.getLabel()}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onDoubleClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleRelable() {
    
  }

  getLabel() {
    if (!this.state.isLabeled) {
      return (
        <div>
          <input type="text" />
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={handleRelable}
          >
            {" "}
            Label{" "}
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>"Zero"</h1> : count;
  }
}

export default Counter;
