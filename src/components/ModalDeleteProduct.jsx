import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { deleteProductById } from '../services/fetchApi';
import showToast from '../services/toastr';
import AppContext from '../context/AppContext';

export default function ModalDeleteProduct(props) {
  const { show, product, handleClose } = props;

  const { fetchLoading, setFetchLoading } = useContext(AppContext);

  const deleteProduct = async () => {
    setFetchLoading(true);
    await deleteProductById(product.id).then(() => showToast('success', 'Produto excluído'));
    setFetchLoading(false);
    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header>
        <Modal.Title className="text-danger">
          <i className="fa-solid fa-circle-exclamation me-2" />
          Confirma a exclusão deste produto?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-3">
            <img src={product.thumbnail} alt={product.title} className="img-fluid mx-auto d-block img-thumbnail" style={{ maxHeight: '80px' }} />
          </div>
          <div className="col-9">
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        </div>
        {fetchLoading ? (
          <div className="d-grid gap-2 d-flex justify-content-md-end mt-3">
            <button
              type="button"
              className="btn btn-md btn-outline-secondary mx-1 my-3"
              style={{ minWidth: '140px' }}
              disabled
            >
              Não
            </button>
            <button
              type="button"
              className="btn btn-md btn-danger mx-1 my-3"
              style={{ minWidth: '140px' }}
              disabled
            >
              <span className="spinner-border spinner-border-sm me-2" />
              Excluindo
            </button>
          </div>
        ) : (
          <div className="d-grid gap-2 d-flex justify-content-md-end mt-3">
            <button
              type="button"
              className="btn btn-md btn-secondary mx-1 my-3"
              style={{ minWidth: '140px' }}
              onClick={() => handleClose()}
            >
              Não
            </button>
            <button
              type="button"
              className="btn btn-md btn-outline-danger mx-1 my-3"
              style={{ minWidth: '140px' }}
              onClick={() => deleteProduct()}
            >
              <i className="fa-solid fa-trash me-2" />
              Sim
            </button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

ModalDeleteProduct.propTypes = {
  show: PropTypes.bool.isRequired,
  product: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
};
