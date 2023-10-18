// Modules
import axios from 'axios';
import { REACT_APP_API_URL } from '../constants/baseApi';

const baseURL = process.env.NODE_ENV === 'production' ? '' : REACT_APP_API_URL;

const $host = axios.create({
  baseURL,
})

export {
  $host
}
