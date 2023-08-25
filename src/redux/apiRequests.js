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
  setToken(JSON.parse(localStorage.getItem('token')));
  if (token) {
    const { data } = await instanceAuth('/users/current');
    return data;
  }
};

const instanceAuth = axios.create({
  baseURL: `https://connections-api.herokuapp.com`,
});
export const getAllContacts = async () => {
  const response = await instanceAuth('/contacts');
  return response.data;
};

export const createNewContact = body => {
  const response = instanceAuth.post('/contacts', body);
  console.log(response);
  return response;
};
export const deleteContact = id => {
  instanceAuth.delete(`/contacts/${id}`);
  console.log(id);
  return id;
};

export const createUser = async body => {
  console.log(body);
  const { data } = await instanceAuth.post(
    'https://connections-api.herokuapp.com/users/signup',
    body
  );
  setTokenToLocal(data.token);
  setToken(data.token);
};
export const singUpUser = async user => {
  const { data } = await instanceAuth.post(
    `https://connections-api.herokuapp.com/users/login`,
    user
  );
  setTokenToLocal(data.token);
  setToken(data.token);
  return data;
};
export const logoutUser = async token => {
  const { data } = await instanceAuth.post(
    `https://connections-api.herokuapp.com/users/logout`,
    token
  );
  delToken(data.token);
  localStorage.removeItem('token');
  return data;
};
