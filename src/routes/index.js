import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Assets from '../pages/Assets';
import Negotiation from '../pages/Negotiation';
// import Orders from '../pages/Orders';
// import FinancialTransaction from '../pages/FinancialTransaction';

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="assets" element={<Assets />} />
      <Route path="negotiation/:id" element={<Negotiation />} />
      {/* <Route path="orders" element={<Orders />} /> */}
      {/* <Route path="financial-transaction" element={<FinancialTransaction />} /> */}
    </Routes>
  );
}

export default Router;
