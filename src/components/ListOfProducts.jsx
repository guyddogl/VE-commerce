import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import ModalDeleteProduct from './ModalDeleteProduct';

export default function ListOfProducts(props) {
  const { allProducts, fetchLoading } = useContext(AppContext);

  const { limit } = props;

  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState('');

  const [deleteProduct, setDeleteProduct] = useState({});

  const seeProduct = (id) => {
    const route = `/product/${id}`;
    return navigate(route);
  };

  const editProduct = (id) => {
    const route = `/product/edit/${id}`;
    return navigate(route);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setDeleteProduct({});
    setShow(false);
  };

  useEffect(() => {
    if (Object.keys(deleteProduct).length > 0) {
      handleShow();
    }
  }, [deleteProduct]);

  const lista = allProducts
    .filter((product) => product.title.toLowerCase().includes(inputSearch.toLowerCase()));

  return (
    <>
      <ModalDeleteProduct show={show} product={deleteProduct} handleClose={handleClose} />
      <div className="col-6 col-lg-4">
        <label htmlFor="nome" className="form-label" style={{ width: '100%' }}>
          <div className="input-group">
            <span className="input-group-text text-secondary">
              <i className="fas fa-search" />
            </span>
            <input
              type="text"
              name="nome"
              value={inputSearch}
              placeholder="Pesquisar por nome"
              className="form-control"
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>
        </label>
      </div>
      <ul className="list-group list-group-flush mt-2">
        <li className="list-group-item bg-light text-dark">
          Lista de Produtos
          {' '}
          {fetchLoading && (
          <div className="spinner-border spinner-border-sm text-secondary ms-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          )}
        </li>
        {lista.length >= 1 && lista.map((product, index) => (
          index < limit && (
          <li className="list-group-item list-hover" key={product.title}>
            <div className="row justify-content-around align-items-center">
              <div className="col-2 col-lg-1">
                <img src={product.thumbnail} alt={product.title} className="img-fluid mx-auto d-block img-thumbnail" style={{ maxHeight: '80px' }} />
              </div>
              <div className="col-8 col-lg-7">
                <p>
                  <b>{product.title}</b>
                  {' '}
                  <br />
                  {' '}
                  {`${product.description.substr(0, 80)}...`}
                </p>
              </div>
              <div className="col-2 col-lg-4 text-end">
                <button
                  type="button"
                  className={`btn btn-md btn-outline-primary m-1 ${fetchLoading && 'disabled'}`}
                  style={{ minWidth: '45px' }}
                  onClick={() => seeProduct(product.id)}
                >
                  <i className="fa-solid fa-file-lines me-lg-2" />
                  <span className="d-none d-lg-inline">Visualizar</span>
                </button>
                <button
                  type="button"
                  className={`btn btn-md btn-outline-secondary m-1 ${fetchLoading && 'disabled'}`}
                  style={{ minWidth: '45px' }}
                  onClick={() => editProduct(product.id)}
                >
                  <i className="fa-regular fa-pen-to-square me-lg-2" />
                  <span className="d-none d-lg-inline">Editar</span>
                </button>
                <button
                  type="button"
                  className={`btn btn-md btn-outline-danger m-1 ${fetchLoading && 'disabled'}`}
                  style={{ minWidth: '45px' }}
                  onClick={() => setDeleteProduct(product)}
                >
                  <i className="fa-solid fa-trash me-lg-2" />
                  <span className="d-none d-lg-inline">Excluir</span>
                </button>
              </div>
            </div>
          </li>
          )
        ))}
      </ul>
    </>
  );
}

ListOfProducts.propTypes = {
  limit: PropTypes.number,
};

ListOfProducts.defaultProps = {
  limit: 5,
};
