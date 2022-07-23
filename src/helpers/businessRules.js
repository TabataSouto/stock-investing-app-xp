const amountBTC = (buy, sell) => {
  if (buy.qtde === 0) {
    if (sell.isRent) {
      return +(sell.calc) * -1;
    }
    return +sell.calc;
  }
  return +buy.calc;
};

const qtdeBTC = (buy, sell) => {
  if (buy.qtde === 0) {
    if (sell.isRent) {
      return +(sell.qtde * -1);
    }
    return +sell.qtde;
  }
  return +buy.qtde;
};

export default {
  amountBTC,
  qtdeBTC,
};
