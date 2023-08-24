import axios from 'axios';

export const setToken = token => {
  instanceAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const delToken = token => {
  delete instanceAuth.defaults.headers.common['Authorization'];
};
const setTokenToLocal = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const refresh = async () => {
  const token = localStorage.getItem('token');
  token && setToken(JSON.parse(token));
  setToken(token);
  const { data } = await instanceAuth.get('/users/current');
  setTokenToLocal(data.token);
  return data;
};

const instanceContacts = axios.create({
  baseURL: `https://64dccaede64a8525a0f726c5.mockapi.io`,
});
const instanceAuth = axios.create({
  baseURL: `https://connections-api.herokuapp.com`,
});
export const getAllContacts = async () => {
  const response = await instanceContacts('/getAll');
  return response.data;
};

export const createNewContact = body => {
  const response = instanceContacts.post('/getAll', body);
  console.log(response);
  return response;
};
export const deleteContact = id => {
  instanceContacts.delete(`/getAll/${id}`);
  console.log(id);
  return id;
};

export const createUser = async body => {
  console.log(body);
  const { data } = await instanceAuth.post(
    'https://connections-api.herokuapp.com/users/signup',
    body
  );
  setToken(data.token);
  setTokenToLocal(data.token);
};
export const singUpUser = async user => {
  const { data } = await instanceAuth.post(
    `https://connections-api.herokuapp.com/users/login`,
    user
  );
  setToken(data.token);
  setTokenToLocal(data.token);
  return data;
};
export const logoutUser = async token => {
  const { data } = await instanceAuth.post(
    `https://connections-api.herokuapp.com/users/logout`,
    token
  );
  delToken(data.token);
  return data;
};
