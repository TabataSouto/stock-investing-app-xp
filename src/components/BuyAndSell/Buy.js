import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQtde, calcPurchase, isRentBuy } from '../../redux/reducers/buyAsset';
import Input from '../Input';

function Buy() {
  const dispatch = useDispatch();
  const toBuy = useSelector((state) => ({
    asset: state.negotiation.asset[0],
    buy: state.buy.calc,
    sell: state.sell.qtde,
    orders: state.orders,
  }));
  const [orderQtde, setOrderQtde] = useState({ qtde: 0, value: toBuy.asset.amount });

  useEffect(() => {
    const verifyIsRent = toBuy
      .orders.find((o) => o.paper === toBuy.asset.paper && o.isRent === true);

    if (verifyIsRent !== undefined) {
      dispatch(isRentBuy(true));
      dispatch(addQtde(orderQtde));
      dispatch(calcPurchase(orderQtde));
    }
  }, [orderQtde, toBuy]);

  const handleChange = ({ target: { value } }) => {
    setOrderQtde({ ...orderQtde, qtde: value });
  };

  return (
    <Input
      title="Comprar"
      id="buy-asset"
      type="number"
      name="buy"
      value={orderQtde.qtde}
      placeholder="Informe a quantidade"
      onChange={handleChange}
      disabled={toBuy.sell > 0 && true}
      max={10000}
    />
  );
}

export default Buy;
