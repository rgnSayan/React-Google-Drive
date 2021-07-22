import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import SideIcons from './Components/SideIcons'
import FilesView from './Components/FilesView';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
