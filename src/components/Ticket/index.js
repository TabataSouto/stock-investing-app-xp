import React from 'react';
import { useSelector } from 'react-redux';

function Ticket() {
  const [asset] = useSelector((state) => state.negotiation.asset);

  return (
    <section>
      <div>
        <h4>Ação</h4>
        <h4>Qtde</h4>
        <h4>Valor (R$)</h4>
      </div>
      <div>
        <p>{ asset.paper }</p>
        <p>{ asset.quantity }</p>
        <p>{ asset.amount }</p>
      </div>
    </section>
  );
}

export default Ticket;
