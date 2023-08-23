import axios from 'axios';

axios.defaults.baseURL = `https://64dccaede64a8525a0f726c5.mockapi.io`;

export const getAllContacts = async () => {
  const response = await axios.get('/getAll');
  return response.data;
};

export const createNewContact = body => {
  const response = axios.post('/getAll', body);
  console.log(response);
  return response;
};
export const deleteContact = id => {
  axios.delete(`/getAll/${id}`);
  console.log(id);
  return id;
};

export const createUser = async body => {
  console.log(body);
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    body
  );
  console.log('post', data);
};
export const singUpUser = async user => {
  const { data } = await axios.post(
    `https://connections-api.herokuapp.com/users/login`,
    user
  );
  return data;
};
