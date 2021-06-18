import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import { Loader } from './components/loader';

import * as routes from './utils/routePaths';

const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Pages is loading..." />}>
      <Switch>
        <Route path={routes.PROFILE_PATH}>
          <Profile title="Secured Profile Page" />
        </Route>
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>
        <Route path={routes.HOME_PATH}>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;