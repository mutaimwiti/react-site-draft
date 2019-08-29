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
    path: '/country',
    name: 'CountryPage',
    component: CountryPage,
    exact: true,
    protected: true
  },
  {
    path: '*',
    component: CountryPage,
    protected: true,
  },
];

export default routes;
