import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import FeatureTable from './FeatureTable.js';
import TabLink from './TabLink.js';

import { HashRouter, Route } from "react-router-dom";


function TableTab({style }) {

   return (<div className="tabContent" style={style}>
        <p>This table lists stats from Wikidata
        </p>
         <FeatureTable> 
                  </FeatureTable>
    </div>);
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedEndpoint: '',
      servicesMap: {},
      openTab: 'servicesList',
      refreshing: false,
      servicesList: []
    };
  }

  render() {
    return (
    <HashRouter>
      <div className="App" style={{margin: '20px'}}>
        <h1>Artsdata Widget</h1>
        <p style={{float: 'right'}}><a href="https://github.com/culturecreates/artsdata-widget">Source repository</a></p>
        <ul className="nav nav-tabs">
            <TabLink to="/" title="Statistics" exact="true" />
            <TabLink to="/client/" title="More" />
        </ul>
        <Route exact path="/" children={({ match }) =>
          <TableTab  style={{display: match ? 'block' : 'none'}} />} />
      </div>
    </HashRouter>
    );
  }
}

