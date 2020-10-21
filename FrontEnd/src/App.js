import React from 'react';
import './App.css';
import BuildingList from './components/BuildingList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const BuildingListOrderByCity = () =>{
  return <BuildingList order="city"/>
}

const BuildingListOrderByRank = () =>{
  return <BuildingList order="country"/>
}

function App() {
  return (
    <BrowserRouter>
        <main>
      <Switch>
          <Route path="/" component={BuildingList} exact />
          <Route path="/city" component={BuildingListOrderByCity} />
          <Route path="/country" component={BuildingListOrderByRank} />
      </Switch>
  </main>
    </BrowserRouter>
  );
}

export default App;
