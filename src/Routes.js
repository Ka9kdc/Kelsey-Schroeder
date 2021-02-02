import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Projects from './projects';
import Skills from './skills';
import About from './About';

const Routes = () => {
  return (
    <Switch>
      <Route path="/Projects" component={Projects} />
      <Route path="/Skills" component={Skills} />
      <Route path="/About" component={About} />
      <Route path="*" component={About} />
    </Switch>
  );
};

export default Routes;
