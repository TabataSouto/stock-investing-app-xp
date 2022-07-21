import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Table from '../../components/Table';
import Input from '../../components/Input';
import Footer from '../../components/Footer';

function Orders() {
  const executedOrders = useSelector((state) => state.orders);
  const [filtered, setFiltered] = useState('');

  const handleChange = (({ target: { value } }) => {
    setFiltered(value);
  });

  return (
    <section>
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
      <Footer />
    </section>
  );
}

export default Orders;
