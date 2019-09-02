import axios from 'axios';
import toastr from 'toastr';
import { authHeader } from './auth';

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    ...authHeader(),
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let err;
    toastr.remove();
    if (error.response) {
      // server error
      switch (error.response.status) {
        case 401:
          // clear user token on local storage
          localStorage.removeItem('auth');
          // prevent toaster from displaying if its used by any saga
          toastr.options.toastClass = 'hide-toast';
          // redirect to login page
          window.location.assign('/login');
          break;
        case 403:
          // deal with authorization errors
          // we don't have to deal with it
          break;
        default:
          break;
      }
    } else {
      // network error
      // deal with network errors
      // set a sensible message to be toasted by the consumer
      err = {
        response: {
          status: 'NETWORK_ERR',
          data: { message: 'Please check your network and try again.' },
        },
      };
    }
    return Promise.reject(err || error);
  },
);

export default http;
