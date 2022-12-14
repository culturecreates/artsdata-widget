import React from "react";
import Table from "react-bootstrap/lib/Table";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import FeatureRow from "./FeatureRow.js";

class Row {
  constructor(dataset, datasetLabel, count, typeLabel) {
    this.dataset = dataset;
    this.datasetLabel = datasetLabel;
    this.count = count;
    this.typeLabel = typeLabel;
  }
}

export default class FeatureTable extends React.Component {
  constructor() {
    super();
    this.state = {
      services: [],
      showAddServiceDialog: false,
      refreshing: false,
    };

    this.sparql_query =
      "SELECT  distinct ?dataset ?datasetLabel (count(distinct ?item) as ?count)  ?typeLabel WHERE {\n" +
      "  wd:Q114171774 wdt:P527 ?dataset .\n" +
      "  optional {  ?item  ?someProperty [ prov:wasDerivedFrom [ pr:P248 ?dataset ] ] ;   wdt:P31/wdt:P279* ?type .\n" +
      "  filter( ?type = wd:Q43229 || ?type = wd:Q5 || ?type = wd:Q17350442 || ?type = wd:Q17538722 ) }\n" +
      '  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n' +
      "}\n" +
      "group by  ?dataset ?datasetLabel ?typeLabel " +
      "ORDER BY ?datasetLabel\n";
  }

  refreshServicesFromWD = (method) => {
    this.setState({
      refreshing: true,
    });
    let url = new URL("https://query.wikidata.org/sparql");
    let params = { query: this.sparql_query, format: "json" };
    let promise = null;
    if (method === "GET") {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
      promise = fetch(url);
    } else {
      var urlParams = new URLSearchParams();
      Object.keys(params).forEach((key) => urlParams.append(key, params[key]));
      promise = fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlParams,
      });
    }

    promise
      .then((result) => result.json())
      .then((result) =>
        this.setState({
          services: result.results.bindings.map(
            (entry) =>
              new Row(
                entry.dataset.value,
                entry.datasetLabel.value,
                entry.count.value,
                entry.typeLabel.value
              )
          ),

          refreshing: false,
        })
      )
      .catch((error) => {
        console.log(error);
        this.setState({ refreshing: false });
      });
  };

  componentDidMount() {
    this.refreshServicesFromWD("GET");
  }

  openAddServiceDialog = () => {
    this.setState({
      showAddServiceDialog: true,
    });
  };

  closeAddServiceDialog = () => {
    this.setState({
      showAddServiceDialog: false,
    });
  };

  get sparqlQueryUrl() {
    return (
      "https://query.wikidata.org/#" + encodeURIComponent(this.sparql_query)
    );
  }

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>Dataset</td>
              <td>General Type</td>
              <td>Entities Enriched</td>
            </tr>
          </thead>
          <tbody>
            {this.state.services.map((row) => (
              <FeatureRow
                dataset={row.dataset}
                datasetLabel={row.datasetLabel}
                typeLabel={row.typeLabel}
                count={row.count}
              />
            ))}
          </tbody>
        </Table>
        <Button
          onClick={() => this.refreshServicesFromWD("POST")}
          disabled={this.state.refreshing}
        >
          <span className="glyphicon glyphicon-refresh"></span>{" "}
          {this.state.refreshing
            ? "Refreshing??? may take up to 1 minute"
            : "Refresh table"}
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={this.openAddServiceDialog}>
          <span className="glyphicon glyphicon-plus"></span> Add a dataset
        </Button>
        <Modal
          show={this.state.showAddServiceDialog}
          onHide={this.closeAddServiceDialog}
        >
          <Modal.Header closeButton>
            <Modal.Title>How to add a dataset to this list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              This list is generated by a{" "}
              <a href={this.sparqlQueryUrl}>SPARQL query on Wikidata</a>. To
              add your dataset follow these steps:
            </p>
            <ul>
            <li>
              Ensure that your contributions have a reference statement 'stated in (P248)' that points to your dataset.
              </li>
              <li>
                Ensure that your dataset is a subclass of 'data set (Q1172284)' </li> 
              <li>
                Add a statement 'has part' to the{" "}
                <a href="https://www.wikidata.org/wiki/Q114171774">
                  LDFI Data Catalog
                </a>{" "}
                that points to your dataset.
              </li>
              <li>
                Refresh this table - it might take a few minutes before your
                dataset appears in the table.
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
