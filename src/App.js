// import lupa from './lupa.png';
import './App.css';
import logo from './logo_martan.png';
// import React,{useState, useEffect} from 'react';
import List from './List';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Busca from './Busca';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      {/* <Route>
        <Switch>
        <Route exact path="/Busca" component={Busca}/>
        <Busca />
        </Switch>
      </Route> */}
      <Route>
        <Switch>
        <Route exact path="/list" component={List}/>
        <List />
        </Switch>
      </Route>
      
      </BrowserRouter> 

    </div>
  );
}

export default App;
