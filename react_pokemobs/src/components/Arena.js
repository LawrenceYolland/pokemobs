import React, { Component } from "react";


class Arena extends Component {
  render() {
    return (
      <div>
        Arena
        <button onClick={() => window.history.back()}>back</ button>
      </div>
    );
  }
}

export default Arena;
