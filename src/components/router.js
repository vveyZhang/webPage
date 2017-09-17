import React from 'react';
import {Route,IndexRedirect,IndexRoute} from 'react-router';
import App from './index.js'
import Home from './home/index.js'
const routes=<Route path="/" component={App}>
    <IndexRoute component={Home} />
</Route>;
export default routes
