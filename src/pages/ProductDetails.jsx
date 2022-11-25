import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import NavBar from '../components/NavBar';
import { getProductById } from '../services/fetchApi';
import AppContext from '../context/AppContext';

export default function ProductDetails() {
  const { fetchLoading, setFetchLoading } = useContext(AppContext);

  const [product, setProduct] = useState({});

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setFetchLoading(true);
    const getProduct = async () => {
      await getProductById(id).then((response) => setProduct(response));
      setFetchLoading(false);
    };
    getProduct();
  }, []);

  const editProduct = (productId) => {
    const route = `/product/edit/${productId}`;
    return navigate(route);
  };

  const deleteProduct = (productId) => {
    console.log(productId);
  };

  console.log(product);

  return (
    <>
      <NavBar />
      <section className="container mt-4">
        {fetchLoading && Object.keys(product).length === 0 ? (
          <div className="spinner-border spinner-border-sm text-secondary ms-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12">
                  <img
                    src={product.thumbnail}
                    className="img-fluid mx-auto d-block img-thumbnail"
                    alt={product.title}
                    style={{ maxHeight: '300px' }}
                  />
                </div>
              </div>
              <div className="row my-3 justify-content-center align-items-center">
                {product.images && product.images.map((image, index) => (
                  <div className="col-2" key={image}>
                    <img src={image} className="img-fluid mx-auto d-block" alt={`product.title ${index}`} style={{ maxHeight: '50px' }} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h5>
                {product.title}
              </h5>
              <p>
                <b>Descrição:</b>
                {' '}
                {product.description}
                <br />
                <b>Categoria:</b>
                {' '}
                {product.category}
                <br />
                <b>Marca:</b>
                {' '}
                {product.brand}
                <br />
                <b>Preço:</b>
                {' '}
                {product.price}
                <br />
                <b>Desconto:</b>
                {' '}
                {product.discountPercentage}
                %
                <br />
                <b>Em estoque:</b>
                {' '}
                {product.stock}
              </p>
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
                  {' '}
                  Editar
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
                  {' '}
                  Excluir
                </button>
              </OverlayTrigger>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
