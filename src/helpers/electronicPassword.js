const electronicPassword = (password) => {
  if (password.length < 6 && password.length > 8) {
    return true;
  }
  return false;
};

export default electronicPassword;
