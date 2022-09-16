import axios from 'axios';
import { config } from './config';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

export const http = axios.create({
  baseURL: config.baseUrl,
  headers,
});
