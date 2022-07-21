const tokenValidation = (token) => {
  if (token.length !== 6) return true;
  return false;
};

export default tokenValidation;
