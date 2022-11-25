import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { addProduct } from '../services/fetchApi';
import showToast from '../services/toastr';
import AppContext from '../context/AppContext';

export default function ProductAdd() {
  const { fetchLoading, setFetchLoading } = useContext(AppContext);

  const INITIAL_STATE = {
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    discountPercentage: '',
    stock: '',
    images: [],
  };

  const [inputsForm, setInputsForm] = useState(INITIAL_STATE);

  const navigate = useNavigate();

  const handleFormInputs = (event) => {
    const { target } = event;
    return setInputsForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const addNewProduct = async (event) => {
    event.preventDefault();
    setFetchLoading(true);
    await addProduct(inputsForm).then(showToast('success', 'Produto adicionado'));
    setFetchLoading(false);
  };

  return (
    <>
      <NavBar />
      <section className="container mt-4">
        <div className="col-12 col-lg-6">
          <form onSubmit={addNewProduct}>
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
                  required
                />
              </label>
            </div>
            <div className="row">
              <label htmlFor="images" className="form-label col-lg-12 my-2">
                <strong>Imagens</strong>
                <input
                  className="form-control"
                  name="images"
                  type="file"
                  onChange={handleFormInputs}
                  disabled={fetchLoading}
                  accept="image/png, image/gif, image/jpeg"
                  multiple
                  required
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
                  required
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
                  required
                />
              </label>
              <label htmlFor="brand" className="form-label col-lg-6 my-2">
                <strong>Marca</strong>
                <input
                  name="brand"
                  type="text"
                  className="form-control"
                  placeholder="Marca"
                  value={inputsForm.brand}
                  onChange={handleFormInputs}
                  disabled={fetchLoading}
                  required
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
                  required
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
                  required
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
                  required
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
      </section>
    </>
  );
}
