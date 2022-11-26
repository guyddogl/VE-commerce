import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import AppContext from '../context/AppContext';
import BackToTop from '../components/BackToTop';

export default function Store() {
  const { allProducts, fetchLoading } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <section className="container mt-4">
        {fetchLoading ? (
          <div className="row justify-content-center my-5">
            <div className="spinner-border spinner-border-lg text-primary" />
          </div>
        ) : (
          <div className="album my-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {allProducts.length > 0
              && allProducts.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <BackToTop />
    </>
  );
}
