import LoginPage from '../pages/LoginPage';
import CountryPage from '../pages/CountryPage';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    exact: true,
  },
  {
    path: '/',
    name: 'StatePage',
    component: CountryPage,
    exact: true,
    protected: true
  },
  {
    path: '/state',
    name: 'StatePage',
    component: CountryPage,
    exact: true,
    protected: true
  }
];

export default routes;
