import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import Search from './SearchPage/Search';

import HomeComponent from './Home/HomeComponent';


// const LoginComponent = Loadable({
//     loader: () => import('./Login/LoginComponent'),
//     loading: () => <div>Loading....</div>
// });

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/search" component={Search} />
        <Route path="**" render={() => (
            <article>
                <h1 className="text-danger">Component Not Found...</h1>
                <p className="text-danger">Route not defined</p>
            </article>
        )} />
    </Switch>
);