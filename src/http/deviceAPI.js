import { $host } from './index';

export const createDevice = async (device) => {
  const { data } = await $host.post('/api/device', device)
  return data;
}; 

export const fetchDevice = async (device) => {
  const { data } = await $host.get('/api/device', device)
  return data;
}; 

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get(`/api/device/${id}`);
  return data;
};
