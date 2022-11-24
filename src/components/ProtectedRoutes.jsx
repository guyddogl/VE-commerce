import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function ProtectedRoutes({ component: Component }) {
  const { isUserLoggedIn } = useContext(AppContext);

  if (!isUserLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Component />;
}

ProtectedRoutes.propTypes = {
  component: PropTypes.func,
};

ProtectedRoutes.defaultProps = {
  component: () => {},
};
