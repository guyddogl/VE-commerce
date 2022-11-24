import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

export default function ListOfProducts(props) {
  const { allProducts, fetchLoading } = useContext(AppContext);

  const { limit } = props;

  console.log(allProducts);

  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item bg-light text-dark">
        Lista de Produtos
        {' '}
        {fetchLoading && (
        <div className="spinner-border spinner-border-sm text-secondary ms-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        )}
      </li>
      {allProducts.length >= 1 && allProducts.map((product, index) => (
        index < limit && (
          <li className="list-group-item list-hover" key={product.title}>
            <div className="row justify-content-around align-items-center">
              <div className="col-2 col-lg-1">
                <img src={product.thumbnail} alt={product.title} className="img-fluid img-thumbnail" />
              </div>
              <div className="col-8 col-lg-9">
                <p>
                  <b>{product.title}</b>
                  {' '}
                  <br />
                  {' '}
                  {`${product.description.substr(0, 100)}...`}
                </p>
              </div>
              <div className="col-2 col-lg-2 text-end">
                <button type="button" className="btn btn-sm btn-outline-secondary m-1">
                  <i className="fa-regular fa-pen-to-square" />
                </button>
                <button type="button" className="btn btn-sm btn-outline-danger m-1">
                  <i className="fa-solid fa-trash" />
                </button>
              </div>
            </div>
          </li>
        )
      ))}
    </ul>
  );
}

ListOfProducts.propTypes = {
  limit: PropTypes.number,
};

ListOfProducts.defaultProps = {
  limit: 10,
};
