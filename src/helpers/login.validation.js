const loginValidation = (user) => {
  const emailValidation = (/\S+@\S+\.\S+/).test(user.email);
  const LENGTH_PASSWORD = 5;

  if (emailValidation && user.password.length > LENGTH_PASSWORD) {
    return false;
  }
  return true;
};

export default loginValidation;
