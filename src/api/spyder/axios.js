import Axios from 'axios';
// import CONFIG from '../../config';

export const connector = Axios.create({
  baseURL: "https://spyder-staging.beacon.li/api/v1",
  timeout: 60000,
});

