import axios from 'axios';

const auth = {
  login: (credentials, cb) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, credentials)
      .then((resp) => {
        const { token } = resp.data.data.user;

        localStorage.setItem('auth', token);

        cb(true, token);
      })
      .catch((err) => {
        cb(false, err);
      });
  },

  logout: () => {
    localStorage.removeItem('auth');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('auth');
  },
};

const authHeader = () => {
  const token = localStorage.getItem('auth');

  return token ? { Authorization: `Bearer ${token}` } : {};
};

export { auth, authHeader };
