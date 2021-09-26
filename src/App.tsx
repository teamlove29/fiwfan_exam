import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Home from './views/Home'
import Leaderboard from './views/Leaderboard';
import HomeWork from './views/HomeWork/index';
import Detail from './views/Home/detail';


function App() {



  return (
    <>
      <NavbarMain />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/activity"></Route>
        <Route path="/leaderboard"><Leaderboard /></Route>
        <Route path="/homework"><HomeWork /></Route>
        <Route path="/detail/:id" children={<Detail />} />
      </Switch>
    </>
  );
}

export default App;
