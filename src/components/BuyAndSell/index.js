import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import orderType from '../../helpers/orderType';
import { decrementBalance, incrementBalance } from '../../redux/reducers/account';
import { addExecutedOrder } from '../../redux/reducers/orders';

import Buy from './Buy';
import Sell from './Sell';
import Input from '../Input';

function BuyAndSell() {
  const [electronicPassword, setElectronicPassword] = useState({ pass: '', confirm: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    asset, buy, sell, account,
  } = useSelector((state) => ({
    asset: state.negotiation.asset[0],
    account: state.account.isLeveraged,
    buy: state.buy,
    sell: state.sell,
    orders: state.orders,
  }));

  const handleClick = ({ target: { name } }) => {
    const order = {
      paper: asset.paper,
      direction: document.getElementById('l').innerText,
      amount: buy.qtde === 0 ? sell.calc : buy.calc,
      quantity: buy.qtde === 0 ? Number(sell.qtde) : Number(buy.qtde),
      idLeveraged: account,
      isRent: sell.isRent,
      isBuy: buy.qtde > 0,
      isSell: sell.qtde > 0 || sell.qtde < 0,
    };

    if (name === 'confirm') {
      dispatch(addExecutedOrder(order));
      if (buy.qtde > 0) {
        dispatch(decrementBalance(buy.calc));
      }
      if (sell.qtde > 0) {
        dispatch(incrementBalance(sell.calc));
      }
    } else {
      navigate('/assets');
    }

    setTimeout(() => {
      setElectronicPassword({
        ...electronicPassword,
        confirm: true,
      });
    }, 500);
  };

  const handleChange = ({ target: { value } }) => {
    setElectronicPassword({
      ...electronicPassword,
      pass: value,
    });
  };

  const isButtonDisabled = electronicPassword.pass.length < 6
    || electronicPassword.pass.length > 8;

  return (
    <section>
      <p>{ `Financeiro da ordem: ${buy.calc > 0 ? buy.calc : sell.calc}` }</p>
      <div>
        <p>
          Lote:
          <span id="l">
            {' '}
            { orderType(buy.qtde > 0 ? buy.qtde : sell.qtde) }
          </span>
        </p>
        <p>
          Operação alavancada:
          <span id="a">
            {' '}
            { account ? 'sim' : 'não' }
          </span>
        </p>
        { sell.qtde > 0 && !sell.isRent && <p>Tomar aluguel (BTC): sim </p> }
        <form>
          <Buy />
          <Sell />
          <Input
            id="ass-eletronica"
            type="text"
            name="ass-eletronica"
            value={electronicPassword.pass}
            placeholder="Assinatura eletrônica"
            onChange={handleChange}
            disabled={false}
          />
          <button
            name="go-back"
            type="button"
            onClick={handleClick}
          >
            Voltar
          </button>
          { electronicPassword.confirm
            ? <p>Operação confirmada com sucesso!</p>
            : (
              <button
                name="confirm"
                type="button"
                onClick={handleClick}
                disabled={isButtonDisabled}
              >
                Confirmar
              </button>
            )}
        </form>
      </div>
    </section>
  );
}

export default BuyAndSell;