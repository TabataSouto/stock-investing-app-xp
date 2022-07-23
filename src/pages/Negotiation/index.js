import React from 'react';
import BuyAndSell from '../../components/BuyAndSell';
import Header from '../../components/Header';
import Ticket from '../../components/Ticket';
import Style from './Style';

function Negotiation() {
  return (
    <section>
      <Header />
      <Style.NegotiationMain>
        <h3>Comprar/Vender Ação:</h3>
        <div>
          <Ticket />
          <BuyAndSell />
        </div>
      </Style.NegotiationMain>
    </section>
  );
}

export default Negotiation;
