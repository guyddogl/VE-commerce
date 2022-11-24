import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { getAllProducts } from '../services/fetchApi';

export default function AppProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);

  const [allProducts, setAllProducts] = useState([]);

  const [fetchLoading, setFetchLoading] = useState(false);

  useEffect(() => {
    setFetchLoading(true);
    const getProducts = async () => {
      const products = await getAllProducts();
      setFetchLoading(false);
      setAllProducts(products.products);
    };
    getProducts();
  }, []);

  const contextValue = useMemo(() => ({
    isUserLoggedIn,
    setIsUserLoggedIn,
    currentUser,
    setCurrentUser,
    allProducts,
    fetchLoading,
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
