import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getProductById } from '../services/fetchApi';
import AppContext from '../context/AppContext';

export default function ProductDetails() {
  const { fetchLoading, setFetchLoading } = useContext(AppContext);

  const [product, setProduct] = useState({});

  const [inputsForm, setInputsForm] = useState({});

  const handleFormInputs = (event) => {
    const { target } = event;
    return setInputsForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setFetchLoading(true);
    const getProduct = async () => {
      await getProductById(id)
        .then((response) => {
          setProduct(response);
          setInputsForm(response);
        });
      setFetchLoading(false);
    };
    getProduct();
  }, []);

  const updateProduct = (event) => {
    event.preventDefault();
    console.log('produto atualizado');
  };

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
              <form onSubmit={updateProduct}>
                <div className="row">
                  <label htmlFor="title" className="form-label col-lg-12 my-2">
                    <strong>Nome</strong>
                    <input
                      name="title"
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      value={inputsForm.title}
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                </div>
                <div className="row">
                  <label htmlFor="description" className="form-label col-lg-12 my-2">
                    <strong>Descrição</strong>
                    <textarea
                      name="description"
                      type="text"
                      className="form-control"
                      placeholder="Descrição"
                      value={inputsForm.description}
                      style={{ resize: 'none' }}
                      rows="4"
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                </div>
                <div className="row">
                  <label htmlFor="category" className="form-label col-lg-6 my-2">
                    <strong>Categoria</strong>
                    <input
                      name="category"
                      type="text"
                      className="form-control"
                      placeholder="Categoria"
                      value={inputsForm.category}
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                  <label htmlFor="brand" className="form-label col-lg-6 my-2">
                    <strong>Categoria</strong>
                    <input
                      name="brand"
                      type="text"
                      className="form-control"
                      placeholder="Marca"
                      value={inputsForm.brand}
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                </div>
                <div className="row">
                  <label htmlFor="price" className="form-label col-lg-4 my-2">
                    <strong>Preço</strong>
                    <input
                      name="price"
                      type="number"
                      className="form-control"
                      placeholder="Categoria"
                      value={inputsForm.price}
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                  <label htmlFor="discountPercentage" className="form-label col-lg-4 my-2">
                    <strong>Desconto</strong>
                    <input
                      name="discountPercentage"
                      type="number"
                      className="form-control"
                      placeholder="Marca"
                      value={inputsForm.discountPercentage}
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                  <label htmlFor="stock" className="form-label col-lg-4 my-2">
                    <strong>Em estoque</strong>
                    <input
                      name="stock"
                      type="number"
                      className="form-control"
                      placeholder="Quantidade em estoque"
                      value={inputsForm.stock}
                      onChange={handleFormInputs}
                      disabled={fetchLoading}
                    />
                  </label>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <button
                      type="button"
                      className={`btn btn-md btn-secondary m-1 ${fetchLoading && 'disabled'}`}
                      style={{ minWidth: '120px' }}
                      onClick={() => navigate('/')}
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className={`btn btn-md btn-outline-primary m-1 ${fetchLoading && 'disabled'}`}
                      style={{ minWidth: '120px' }}
                    >
                      <i className="fa-solid fa-save" />
                      {' '}
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
}