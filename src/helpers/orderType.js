const orderType = (qtde) => {
  if (qtde < 1) return 'Informar a quantidade';
  if (qtde < 100) return 'Fracionário';
  return 'Padrão';
};

export default orderType;
