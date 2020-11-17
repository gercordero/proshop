import axios from "axios";

const url = "http://localhost:4000/api/products";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSingleProduct = async (id) => {
  try {
    const { data } = await axios.get(url + "/" + id);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
