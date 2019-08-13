import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import MovieDetail from './components/MovieDetail';
import Search from './components/Search';

const routes = (
    <Switch>
      <Route path='/detail/:id' exact component={props => <MovieDetail {...props}/>} />
      <Route exact path="/" component={Search} />
      <Route path="*" component={() => <Redirect to='/' />} />
    </Switch>
  );
  
  export default routes;