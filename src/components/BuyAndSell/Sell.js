import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQtde, calcPurchase, saleInWallet, sellWithcBTC,
} from '../../redux/reducers/sellAsset';
import Input from '../Input';

function Sell() {
  const dispatch = useDispatch();
  const toSell = useSelector((state) => ({
    asset: state.negotiation.asset[0],
    buy: state.buy.qtde,
    sell: state.sell,
    orders: state.orders.executedOrders,
  }));
  const [orderQtde, setOrderQtde] = useState({ qtde: 0, value: toSell.asset.amount });

  useEffect(() => {
    const assetInWallet = toSell.orders
      .some((order) => order.paper === toSell.asset.paper);
    const filteredAssetInWallet = toSell
      .orders.filter((order) => order.paper === toSell.asset.paper);
    const isBTC = filteredAssetInWallet.some((o) => o.quantity < orderQtde.qtde);
    dispatch(sellWithcBTC(isBTC));
    dispatch(addQtde(orderQtde));
    dispatch(calcPurchase(orderQtde));
    dispatch(saleInWallet(assetInWallet));
  }, [orderQtde, toSell]);

  const handleChange = ({ target: { value } }) => {
    setOrderQtde({ ...orderQtde, qtde: +value });
  };

  return (
    <Input
      title="Vender"
      id="buy-asset"
      type="number"
      name="sell"
      value={orderQtde.qtde}
      placeholder="Informe a quantidade"
      onChange={handleChange}
      disabled={(toSell.buy > 0 || !toSell.sell.inWallet) && true}
      max={10000}
    />
  );
}

export default Sell;
