import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AppContext from '../context/AppContext';

export default function ListOfProducts(props) {
  const { allProducts, fetchLoading } = useContext(AppContext);

  const { limit } = props;

  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState('');

  const seeProduct = (id) => {
    const route = `/product/${id}`;
    return navigate(route);
  };

  const editProduct = (id) => {
    const route = `/product/edit/${id}`;
    return navigate(route);
  };

  const deleteProduct = (product) => {
    console.log(product);
  };

  const lista = allProducts
    .filter((product) => product.title.toLowerCase().includes(inputSearch.toLowerCase()));

  return (
    <>
      <div className="row">
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
      </div>
      <div className="row mt-2">
        <div className="col-11 col-lg-12">
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
            {lista.length >= 1 && lista.map((product, index) => (
              index < limit && (
              <li className="list-group-item list-hover" key={product.title}>
                <div className="row justify-content-around align-items-center">
                  <div className="col-2 col-lg-1">
                    <img src={product.thumbnail} alt={product.title} className="img-fluid mx-auto d-block img-thumbnail" style={{ maxHeight: '80px' }} />
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
                    <OverlayTrigger
                      placement="top"
                      overlay={(<Tooltip>Ver detalhes</Tooltip>)}
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-primary m-1"
                        style={{ minWidth: '45px' }}
                        onClick={() => seeProduct(product.id)}
                      >
                        <i className="fa-solid fa-file-lines" />
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={(<Tooltip>Editar</Tooltip>)}
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-secondary m-1"
                        style={{ minWidth: '45px' }}
                        onClick={() => editProduct(product.id)}
                      >
                        <i className="fa-regular fa-pen-to-square" />
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      overlay={(<Tooltip>Excluir</Tooltip>)}
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-danger m-1"
                        style={{ minWidth: '45px' }}
                        onClick={() => deleteProduct(product)}
                      >
                        <i className="fa-solid fa-trash" />
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

ListOfProducts.propTypes = {
  limit: PropTypes.number,
};

ListOfProducts.defaultProps = {
  limit: 10,
};
