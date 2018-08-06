import React from "react";

class Component extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>
          「{ this.props.sampleMessage }」
        </p>
      </React.Fragment>
    );
  }
}
export default Component;
