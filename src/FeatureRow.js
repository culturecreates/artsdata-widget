
import React from 'react';

export default class FeatureRow extends React.Component {
   constructor() {
      super();
     
   }


   nameCell() {
      let parts = [
        <span key='name'>{this.props.datasetLabel}</span>
      ];
    
      return parts;
   }


   render() {
      return (
        <tr>
          <td>{this.nameCell()}</td>   
            <td>{this.props.typeLabel}</td>
            <td>{this.props.count}</td>
        </tr>);
   }
}

