import React from 'react';
// O <switch> valida a rota para aparecer apenas uma de cada vez sem ele apareceria tudo de uma vez
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Ticket from '../pages/Ticket';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Ticket/:id" component={Ticket} />
  </Switch>
);

export default Routes;
