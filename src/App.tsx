import React, {Component} from 'react';
import './App.css';

import CardList from './components/CardList';
import Company from './utils/Company';
import Team from './utils/Team';

class App extends Component {
  public render() {
    const company = createCompany();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{company.companyName}</h1>
        </header>
        <CardList root={company.search(['CEO'])}/>
      </div>
    );
  }
}



function createCompany() {
  // TODO read json from a file so that backups could be saved
  
  const tree =  new Company('Not A Shell Company');
  
  // CEO NODE
  const ceo = new Team('CEO');
  tree.addTeam(ceo, ['CEO']);

  // Top Level Organization
  const supplyChain = new Team('Supply Chain Management');
  const engineering = new Team('Engineering');
  const production = new Team("Production");
  const quality = new Team('Quality');
  const office = new Team('Office');


  tree.addTeam(engineering, ['CEO']);
  tree.addTeam(supplyChain, ['CEO']);
  tree.addTeam(production, ['CEO']);
  tree.addTeam(quality, ['CEO']);
  tree.addTeam(office, ['CEO']);

  // Engineering
  const newProd = new Team('New Production');
  const industrialEng = new Team('Industrial Engineering');
  
  tree.addTeam(newProd, ['CEO','Engineering']);
  tree.addTeam(industrialEng, ['CEO','Engineering']);

  // Supply Chain Management
  const purchasing = new Team('Purchasing');
  const planning = new Team('Planning');
  const warehouse = new Team('Warehouse');
  const customer = new Team('Customer');

  tree.addTeam(purchasing, ['CEO', 'Supply Chain Management']);
  tree.addTeam(planning, ['CEO', 'Supply Chain Management']);
  tree.addTeam(warehouse, ['CEO', 'Supply Chain Management']);
  tree.addTeam(customer, ['CEO', 'Supply Chain Management']);

  // Production
  const workshop1 = new Team('Workshop1');
  const workshop2 = new Team('Workshop2');
  const maintenance = new Team('Maintenance');

  tree.addTeam(workshop1, ['CEO', 'Production']);
  tree.addTeam(workshop2, ['CEO', 'Production']);
  tree.addTeam(maintenance, ['CEO', 'Production']);
  
  // Quality
  const qualityControl = new Team('Quality Control');
  const calibration = new Team('Calibration');
  const qualityEngineering = new Team('Quality Engineering');

  tree.addTeam(qualityControl, ['CEO', 'Quality']);
  tree.addTeam(calibration, ['CEO', 'Quality']);
  tree.addTeam(qualityEngineering, ['CEO', 'Quality']);

  // Office
  const officeManager = new Team('Office Manager');
  const jrOfficeManager = new Team('Office Manager Lite');
  const jrOfficeManagersSon = new Team('Office Manager Lite Baby Edition');

  tree.addTeam(officeManager, ['CEO', 'Office']);
  tree.addTeam(jrOfficeManager, ['CEO', 'Office', 'Office Manager']);
  tree.addTeam(jrOfficeManagersSon, ['CEO', 'Office', 'Office Manager', 'Office Manager Lite']);

  // tslint:disable-next-line:no-console 
  console.log(tree.getRoot());
  return tree;
}
export default App;
