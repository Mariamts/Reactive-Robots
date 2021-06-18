import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';

import HomePage from './pages/home-page';
import { Loader } from './components/loader';

import * as routes from './utils/routePaths';
import FakerRobots from './pages/faker-robots';
import CustomRobots from './pages/custom-robots-page';

const Profile = React.lazy(() => import('./pages/profile'));
const AuthPage = React.lazy(() => import('./pages/auth'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Page is loading..." />}>
      <Switch>
        <Route path={routes.PROFILE_PATH}>
          <Profile title="Secured Profile Page" />
        </Route>
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>
        <Route path={routes.CUSTOM_ROBOTS}>
          <CustomRobots />
        </Route>
        <Route path={routes.FAKER_ROBOTS}>
          <FakerRobots />
        </Route>
        <Route path={routes.HOME_PATH}>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
