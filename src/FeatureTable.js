import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FeatureRow from './FeatureRow.js';

class Row {
    constructor(name) {
       this.name = name;
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

       this.sparql_query = (
        "SELECT ?datasetLabel WHERE {\n" +
        "     wd:Q114171774 wdt:P527 ?dataset .\n"+
        "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n" +
        "}\n" +
        "ORDER BY DESC(?datasetLabel)\n");
    }

    refreshServicesFromWD = (method) => {
       this.setState({
         refreshing: true
       });
       let url = new URL("https://query.wikidata.org/sparql");
       let params = {query:this.sparql_query, format: 'json'};
       let promise = null;
       if (method === 'GET') {
         Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
         promise = fetch(url);
       } else {
         var urlParams = new URLSearchParams();
         Object.keys(params).forEach(key => urlParams.append(key, params[key]));
         promise = fetch(url, {
           method: 'POST',
           mode: 'cors',
           cache: 'no-cache',
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
           body: urlParams,
         });
       }

       promise
        .then(result => result.json())
        .then(result =>
            this.setState({
              services: result.results.bindings.map(entry =>
                new Row(entry.datasetLabel.value)),
              refreshing: false
           })
        )
        .catch(error => {
           console.log(error);
           this.setState({ refreshing: false });
        });
    }

    componentDidMount() {
       this.refreshServicesFromWD('GET');
    }


    openAddServiceDialog = () => {
        this.setState({
           showAddServiceDialog: true
        });
    }

    closeAddServiceDialog = () => {
        this.setState({
           showAddServiceDialog: false
        });
    }

    get sparqlQueryUrl() {
        return 'https://query.wikidata.org/#'+encodeURIComponent(this.sparql_query);
    }

    render() {
      return (
        <>
        <Table striped bordered hover>
           <thead>
             <tr>
               <td>Name</td>
             
             </tr>
           </thead>
           <tbody>
              {this.state.services.map(
                row => <FeatureRow
                        name={row.name}
                        />)
               }
           </tbody>
        </Table>
        <Button onClick={this.openAddServiceDialog}><span className="glyphicon glyphicon-plus"></span> Add a dataset</Button>&nbsp;&nbsp;&nbsp;
        <Button onClick={() => this.refreshServicesFromWD('POST')} disabled={this.state.refreshing}><span className="glyphicon glyphicon-refresh"></span> {this.state.refreshing ? 'Refreshing…' : 'Refresh table'}</Button>

        <Modal show={this.state.showAddServiceDialog} onHide={this.closeAddServiceDialog}>
          <Modal.Header closeButton>
            <Modal.Title>How to add a dataset to this list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
               This list is generated by <a href={this.sparqlQueryUrl}>a SPARQL query on Wikidata</a>.
               To add your service to it, follow these steps:
            </p>
            <ul>
                  <li>Add a statement 'has part' to the LDFI Data Catalog that points to your dataset.
                  </li>
                <li>Refresh this table - it might take a few minutes before your service appears in the table.</li>
            </ul>
          </Modal.Body>
        </Modal>
        </>
      );
   }
}
