import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import ListOfProducts from '../components/ListOfProducts';
import BackToTop from '../components/BackToTop';

export default function Home() {
  const [limitOfProducts, setLimitOfProducts] = useState(7);

  return (
    <>
      <NavBar />
      <section className="container mt-4">
        <ListOfProducts limit={limitOfProducts} />
        <div className="row mt-3 mb-4 justify-content-center text-center">
          <div className="col-10 col-lg-4">
            {limitOfProducts === 7 && (
            <button
              type="button"
              onClick={() => setLimitOfProducts(30)}
              className="btn btn-sm btn-secondary"
            >
              <i className="fa-solid fa-plus me-2" />
              Exibir mais produtos
            </button>
            )}
            {limitOfProducts === 30 && (
            <button
              type="button"
              onClick={() => setLimitOfProducts(7)}
              className="btn btn-sm btn-secondary"
            >
              <i className="fa-solid fa-minus me-2" />
              Exibir menos produtos
            </button>
            )}
          </div>
        </div>
      </section>
      <BackToTop />
    </>
  );
}
