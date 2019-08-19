import React, { Component } from "react";

class Pokemon extends Component {

  render() {
    return (
      <div>
        <button onClick={() => window.history.back()}>back</button>

      </div>
    );
  }
}

export default Pokemon;
