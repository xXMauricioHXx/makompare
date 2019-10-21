import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.MAKOMPARE_URL || 'http://localhost:3000',
});

export const searchProducts = async name => {
  const url = `http://localhost:3000/produtos?q=${name}`;
  const response = await axios.get(url);
  return response.data;
};
