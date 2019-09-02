import axios from 'axios';

class Auth {
  login(credentials, cb) {
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
  }

  logout() {
    localStorage.removeItem('auth');
  }

  isAuthenticated() {
    return !!localStorage.getItem('auth');
  }
}

export const authHeader = () => {
  const auth = localStorage.getItem('auth');

  return auth ? { Authorization: `Bearer ${auth}` } : {};
};

export default new Auth();
