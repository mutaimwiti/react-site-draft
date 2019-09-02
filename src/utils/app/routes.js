import routes from '../../routes/routes';

export const protectedRoutes = routes
  .filter((route) => route.protected)
  .map((route) => route.path);

export const isProtectedRoute = (location) => {
  const { pathname } = location;

  return protectedRoutes.indexOf(pathname) > -1;
};

export const isLoginRoute = (location) => {
  const { pathname } = location;

  return pathname === '/login';
};
