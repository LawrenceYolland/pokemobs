import React, { Component } from "react";


class PokeCentre extends Component {
  render() {
    return (
      <div>
        PokeCentre
        <button onClick={() => window.history.back()}>back</ button>
      </div>
    );
  }
}

export default PokeCentre;
