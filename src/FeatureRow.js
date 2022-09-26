import React from "react";

export default class FeatureRow extends React.Component {
  nameCell() {
    let parts = [<span key="name">{this.props.datasetLabel}</span>];
    return parts;
  }

  render() {
    return (
      <tr>
        <td><a href={this.props.dataset}>{this.nameCell()}</a></td>
        <td>{this.props.typeLabel}</td>
        <td>{this.props.count}</td>
      </tr>
    );
  }
}
