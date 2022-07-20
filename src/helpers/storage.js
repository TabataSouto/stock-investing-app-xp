const setUser = (data) => localStorage.setItem('user', JSON.stringify(data));
const getUser = () => JSON.parse(localStorage.getItem('user'));

export default {
  setUser,
  getUser,
};
