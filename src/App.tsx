import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import NavbarMain from './components/NavbarMain';
import Home from './views/Home'
import Leaderboard from './views/Leaderboard';


function App() {




  const styles = {
    customButton: {
      backgroundColor: '#0B0C10',
      borderColor: '#45A293',
      color: '#45A293',
    }
  };



  return (
    <>


      <NavbarMain />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/activity"></Route>
        <Route path="/leaderboard"><Leaderboard /></Route>
      </Switch>







    </>
  );
}

export default App;
