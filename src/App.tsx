import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Admin from 'layouts/Admin';
import Auth from 'layouts/Auth';

import Index from 'views/Index';
import Landing from 'views/Landing';
import Profile from 'views/Profile';

type Props = {};

const App: FC<Props> = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				{/* add routes with layouts */}
				<Route path='/admin' component={Admin} />
				<Route path='/auth' component={Auth} />
				{/* add routes without layouts */}
				<Route path='/landing' exact component={Landing} />
				<Route path='/profile' exact component={Profile} />
				<Route path='/' exact component={Index} />
				{/* add redirect for first page */}
				<Redirect from='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
