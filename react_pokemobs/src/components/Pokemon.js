import React from "react";


class Pokemon extends React.Component {
  render() {
    return <div>Pokemon
     
        <button onClick={() => window.history.back()}>back</ button>
    </div>;
  }
}

export default Pokemon;
