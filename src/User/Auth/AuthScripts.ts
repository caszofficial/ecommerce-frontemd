const login = async (userData: any) => {
  try {
    localStorage.setItem("user-data", JSON.stringify(userData));
  } catch (error) {
    console.error(error)
  } finally{
    window.location.reload()
  }
};

const logout = () => {
  localStorage.removeItem("user-data");
};

const isAuthenticated = () => {
  return localStorage.getItem("user-data") !== null;
};

const getCurrentUser = () => {
  const userData = localStorage.getItem("user-data");
  return userData ? JSON.parse(userData) : null;
};

export { login, logout, isAuthenticated, getCurrentUser };
