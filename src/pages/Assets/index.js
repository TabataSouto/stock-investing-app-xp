import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardAssets from '../../components/CardAssets';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { fetchAssets } from '../../redux/reducers/assets';
import Style from './Style';

function Assets() {
  const assets = useSelector((state) => state.assets.list);
  const ordersExecuted = useSelector((state) => state.orders);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAssets());
  }, [ordersExecuted]);

  return (
    <Style.AssetContainer>
      <Header />
      <Style.MainAssets>
        <CardAssets
          title="Minhas Ações:"
          assets={ordersExecuted}
        />
        <CardAssets
          title="Disponíveis para investir:"
          assets={
            assets
              .filter((asset) => ordersExecuted
                .every((order) => asset.paper !== order.paper))
            }
        />
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
