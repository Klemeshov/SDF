import { api } from '../api.js';

export const getNews = async () => {
  const data = await api.get('/posts');
  console.log(data);
  return data.data;
};
