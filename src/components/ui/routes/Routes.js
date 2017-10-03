import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Teams from '../../container/teams/Teams';
import Players from '../../container/players/Players';

const Routes = () => (
  <main>
    <Switch>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/teams" component={Teams} />
        <Route path="/players/:tid" component={Players} />
      </div>
    </Switch>
  </main>
);

export default Routes;
