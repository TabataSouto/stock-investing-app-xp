import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Table from '../../components/Table';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Style from './Style';

function Orders() {
  const navigate = useNavigate();
  const executedOrders = useSelector((state) => state.orders.executedOrders);
  const [filtered, setFiltered] = useState('');

  const handleChange = (({ target: { value } }) => {
    setFiltered(value);
  });

  return (
    <section>
      <Header />
      <Style.OrdersContainer>
        <Input
          title=""
          id="filter-asset"
          type="text"
          name="filter-asset"
          placeholder="busque pelo nome da ação"
          value={filtered}
          onChange={handleChange}
          disabled={false}
          max={100}
        />
        <Table
          orders={executedOrders
            .filter((asset) => asset.paper
              .toLowerCase().includes(filtered))}
        />
        <Button
          name="go-back"
          disabled={false}
          onClick={() => navigate('/assets')}
          title="Voltar"
        />
        <Footer />
      </Style.OrdersContainer>
    </section>
  );
}

export default Orders;
