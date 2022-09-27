import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import FeatureTable from "./FeatureTable.js";
import TabLink from "./TabLink.js";

import { HashRouter, Route } from "react-router-dom";

function TableTab({ style }) {
  return (
    <div className="tabContent" style={style}>
      <h3>LDFI Contributions to Wikidata</h3>
      <p>
        This table lists datasets participating in the{" "}
        <a href="https://www.wikidata.org/wiki/Q114171774">LDFI Data Catalog</a>
        {" "}along with the number of Wikidata entities they enriched. Statements added to an entity must have the reference 'stated in (P248)' in order to be included in this table. 
      </p>
      <FeatureTable />
    </div>
  );
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedEndpoint: "",
      servicesMap: {},
      openTab: "servicesList",
      refreshing: false,
      servicesList: [],
    };
  }

  render() {
    return (
      <HashRouter>
        <div className="App" style={{ margin: "20px" }}>
          <p style={{ float: "right" }}>
            <a href="https://github.com/culturecreates/artsdata-widget">
              Source repository
            </a>
          </p>
          <ul className="nav nav-tabs">
            <TabLink to="/" title="LDFI Wikidata" exact="true" />
            <TabLink to="/client/" title="More" />
          </ul>
          <Route
            exact
            path="/"
            children={({ match }) => (
              <TableTab style={{ display: match ? "block" : "none" }} />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}
