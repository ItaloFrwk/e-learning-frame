import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';
import Router from './index';

import AuthContext from '../contexts/Authentication';
import useStorage from '../utils/localStorage/useStorage';

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);
  const logged = useStorage('token')[0];
  const routing = useRoutes(Router(logged, token));
  return routing;
};

export default PrivateRoute;
