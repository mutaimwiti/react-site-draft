export const login = () => {
  localStorage.setItem('auth', JSON.stringify(true));
};

export const logout = () => {
  localStorage.setItem('auth', JSON.stringify(false));
};
