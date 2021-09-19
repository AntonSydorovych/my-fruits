import React from 'react';
import MainPage from "./components/MainPage/MainPage";
import Info from "./components/InfoPage/InfoPage";
import {Switch, Route, Redirect} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/info" component={Info} />
            <Redirect to="/" />
        </Switch>
    </div>
  );
}

export default App;

//sdsdsdsd
