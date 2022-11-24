import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const contextValue = useMemo(() => ({
    isUserLoggedIn,
    setIsUserLoggedIn,
    currentUser,
    setCurrentUser,
  }));

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
