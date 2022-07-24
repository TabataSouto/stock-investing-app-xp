import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardAssets from '../../components/CardAssets';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { fetchAssets } from '../../redux/reducers/assets';
import loadingIcon from '../../images/loading.gif';
import Style from './Style';
import { updateExecutedOrder } from '../../redux/reducers/orders';

function Assets() {
  const assets = useSelector((state) => state.assets.list);
  const ordersExecuted = useSelector((state) => state.orders.executedOrders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (ordersExecuted.length > 0) {
      const filtered = ordersExecuted.filter((el) => el.quantity !== 0);
      dispatch(updateExecutedOrder(filtered));
    }
    setTimeout(() => {
      dispatch(fetchAssets());
    }, 1000);
  }, []);

  return (
    <Style.AssetContainer>
      <Header />
      <Style.MainAssets>
        <CardAssets
          title="Minhas Ações:"
          assets={ordersExecuted}
        />
        {
          assets.length
            ? (
              <CardAssets
                title="Disponíveis para investir:"
                assets={
              assets
                .filter((asset) => ordersExecuted
                  .every((order) => asset.paper !== order.paper))
              }
              />
            ) : <img src={loadingIcon} alt="esperando página carregar" />
        }
        <Button
          name="orders-status"
          disabled={false}
          onClick={() => navigate('/orders')}
          title="Status ordens"
        />
      </Style.MainAssets>
      <Footer />
    </Style.AssetContainer>
  );
}

export default Assets;
