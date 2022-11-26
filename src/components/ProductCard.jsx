import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

export default function ProductCard(props) {
  const { product } = props;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={product.thumbnail} alt={product.title} className="card-img-top" width="100%" height="225" />
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <span className="card-text d-block">
                <b>{product.title.substr(0, 20)}</b>
                {' '}
                -
                {' '}
                R$
                {product.price}
              </span>
              <Rating
                initialRating={product.rating}
                fullSymbol={<i className="fa-solid fa-star text-secondary" />}
                emptySymbol={<i className="fa-regular fa-star text-secondary" />}
                readonly
              />
            </div>
            <div className="col-3 text-center">
              <div className="bg-light text-success p-1 border rounded-3">
                <b>
                  {Math.floor(product.discountPercentage)}
                  % OFF
                </b>
              </div>
            </div>
          </div>
          <p className="card-text my-4" style={{ height: '40px' }}>
            {product.description.substr(0, 70)}
            ...
          </p>
          <div className="row p-3">
            <button type="button" className="btn btn-md btn-primary">
              <i className="fa-solid fa-cart-plus me-2" />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any.isRequired).isRequired,
};
