import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getProductById } from '../services/fetchApi';
import AppContext from '../context/AppContext';

export default function ProductDetails() {
  const { fetchLoading, setFetchLoading } = useContext(AppContext);

  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setFetchLoading(true);
    const getProduct = async () => {
      await getProductById(id).then((response) => setProduct(response));
      setFetchLoading(false);
    };
    getProduct();
  }, []);

  return (
    <>
      <NavBar />
      <section className="container mt-4">
        Product Detail
        {' '}
        {id}
        {fetchLoading && (
          <div className="spinner-border spinner-border-sm text-secondary ms-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {product.title}
      </section>
    </>
  );
}
