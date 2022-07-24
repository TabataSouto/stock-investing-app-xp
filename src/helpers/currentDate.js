const currentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.toLocaleTimeString('pt', { hour24: true });

  return `${day}/${month}/${year} ${hour}`;
};

export default currentDate;
