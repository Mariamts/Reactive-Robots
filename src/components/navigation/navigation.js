import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../redux/selectors';

import * as routes from '../../utils/routePaths';

import css from './navigation.module.css';

function Navigation() {
  const authorized = useSelector(authSelector);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 p-3">
      <div className="container-fluid">
        <a className="navbar-brand"></a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={routes.HOME_PATH}
                exact
                activeClassName={css['active-class']}>
                Home Page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={routes.FAKER_ROBOTS}
                exact
                activeClassName={css['active-class']}>
                Faker Robots
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={routes.CUSTOM_ROBOTS}
                exact
                activeClassName={css['active-class']}>
                Custom Robots
              </NavLink>
            </li>
            {authorized && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={routes.PROFILE_PATH}
                  activeClassName={css['active-class']}>
                  Profile
                </NavLink>
              </li>
            )}

            {!authorized && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={routes.AUTH_PATH}
                  activeClassName={css['active-class']}>
                  AuthPage
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
