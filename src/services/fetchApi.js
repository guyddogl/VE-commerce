const getAllProducts = async () => {
  try {
    const URL = 'https://dummyjson.com/products';
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

const getProductById = async (id) => {
  try {
    const URL = `https://dummyjson.com/products/${id}`;
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

const deleteProductById = async (id) => {
  try {
    const URL = `https://dummyjson.com/products/${id}`;
    const result = await fetch(URL, {
      method: 'DELETE',
    });
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

const updateProduct = async (product) => {
  try {
    const URL = `https://dummyjson.com/products/${product.id}`;
    const result = await fetch(URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: product.title,
        description: product.description,
        category: product.category,
        brand: product.brand,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
      }),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProduct,
};
