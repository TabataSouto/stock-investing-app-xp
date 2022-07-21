import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQtde, calcPurchase, saleWithRent } from '../../redux/reducers/sellAsset';

import Input from '../Input';
import Style from './Style';

function Sell() {
  const dispatch = useDispatch();
  const toSell = useSelector((state) => ({
    asset: state.negotiation.asset[0],
    buy: state.buy.qtde,
    sell: state.sell.calc,
    orders: state.orders,
  }));
  const [orderQtde, setOrderQtde] = useState({ qtde: 0, value: toSell.asset.amount });

  useEffect(() => {
    const verifyWallet = toSell.orders
      .some((order) => order.paper === toSell.asset.paper);
    dispatch(saleWithRent(!verifyWallet));
    dispatch(addQtde(orderQtde));
    dispatch(calcPurchase(orderQtde));
  }, [orderQtde, toSell]);

  const handleChange = ({ target: { value } }) => {
    setOrderQtde({ ...orderQtde, qtde: value });
  };

  return (
    <Style.Div>
      <p>Vender</p>
      <Input
        id="buy-asset"
        type="number"
        name="sell"
        value={orderQtde.qtde}
        placeholder="Informe a quantidade"
        onChange={handleChange}
        disabled={toSell.buy > 0 && true}
      />
    </Style.Div>
  );
}

export default Sell;
