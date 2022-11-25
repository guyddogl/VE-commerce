import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import showToast from '../services/toastr';

export default function LoginForm() {
  const INITIAL_STATE = {
    username: '',
    password: '',
  };

  const [inputsLoginForm, setInputsLoginForm] = useState(INITIAL_STATE);

  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const { setIsUserLoggedIn, setCurrentUser } = useContext(AppContext);

  const navigate = useNavigate();

  const validateRequiredFormInputs = () => {
    const email = inputsLoginForm.username.length > 5;
    const password = inputsLoginForm.password.length > 5;
    return !(email && password);
  };

  const handleFormInputs = ({ target }) => {
    setInputsLoginForm((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  useEffect(() => {
    setIsLoginButtonDisabled(validateRequiredFormInputs());
  }, [inputsLoginForm]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCurrentUser(inputsLoginForm.username);
    setIsUserLoggedIn(true);
    showToast('success', 'Login realizado com sucesso');
    navigate('/');
    setIsLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text text-secondary">
          <i className="fa-solid fa-user" />
        </span>
        <input
          type="username"
          name="username"
          value={inputsLoginForm.username}
          placeholder="username"
          className="form-control"
          onChange={handleFormInputs}
          required
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text text-secondary">
          <i className="fa-solid fa-key" />
        </span>
        <input
          type="password"
          name="password"
          value={inputsLoginForm.password}
          placeholder="password"
          className="form-control"
          onChange={handleFormInputs}
          required
        />
      </div>
      <div className="d-grid">
        {isLoading
          ? (
            <button type="button" className="btn btn-md btn-primary my-3 scc-btn d-block">
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
              Acessando...
            </button>
          )
          : (
            <button
              type="submit"
              className={`btn btn-md btn-primary my-3 scc-btn d-block ${isLoginButtonDisabled && 'disabled'}`}
            >
              Acessar
            </button>
          )}
      </div>
    </form>
  );
}
