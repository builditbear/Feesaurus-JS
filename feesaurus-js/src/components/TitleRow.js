import React from "react";
import Title from "./Title.js";
import AboutButton from "./AboutButton.js";

export default class TitleRow extends React.Component {
  render() {
    return (
      <div className="title-row">
        <Title name={this.props.name} />
        <AboutButton name={this.props.name} />
      </div>
    );
  }
}
