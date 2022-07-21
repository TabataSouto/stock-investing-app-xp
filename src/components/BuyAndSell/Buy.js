import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQtde, calcPurchase } from '../../redux/reducers/buyAsset';

import Input from '../Input';
import Style from './Style';

function Buy() {
  const dispatch = useDispatch();
  const toBuy = useSelector((state) => ({
    asset: state.negotiation.asset[0].amount,
    buy: state.buy.calc,
    sell: state.sell.qtde,
  }));
  const [orderQtde, setOrderQtde] = useState({ qtde: 0, value: toBuy.asset });

  useEffect(() => {
    dispatch(addQtde(orderQtde));
    dispatch(calcPurchase(orderQtde));
  }, [orderQtde, toBuy]);

  const handleChange = ({ target: { value } }) => {
    setOrderQtde({ ...orderQtde, qtde: value });
  };

  return (
    <Style.Div>
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
    </Style.Div>
  );
}

export default Buy;
