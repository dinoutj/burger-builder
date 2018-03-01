import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-d31fc.firebaseio.com/'
});

export default instance;