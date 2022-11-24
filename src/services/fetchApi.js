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

module.exports = {
  getAllProducts,
  getProductById,
};
