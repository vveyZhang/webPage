import React from 'react';
import {Route,IndexRedirect,IndexRoute} from 'react-router';
import App from './index.js'
import Home from './home/index.js'
import Article from './article'
import Source from './source'
import AboutMe from './me'
const routes=<Route path="/" component={App}>
    <IndexRedirect to="home"></IndexRedirect>
    <Route path="home" component={Home} ></Route>
    <Route path="article" component={Article}></Route>
    <Route path="source" component={Source}></Route>
    <Route path="me" component={AboutMe}></Route>
</Route>;
export default routes
