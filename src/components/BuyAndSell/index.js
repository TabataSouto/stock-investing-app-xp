import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import orderType from '../../helpers/orderType';
import { decrementBalance, incrementBalance, incrementBalanceRent } from '../../redux/reducers/account';
import { addExecutedOrder } from '../../redux/reducers/orders';
import currentDate from '../../helpers/currentDate';
import Buy from './Buy';
import Sell from './Sell';
import Input from '../Input';
import Style from './Style';

function BuyAndSell() {
  const [electronicPassword, setElectronicPassword] = useState({ pass: '', confirm: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    asset, buy, sell, account,
  } = useSelector((state) => ({
    asset: state.negotiation.asset[0],
    account: state.account,
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
      isLeveraged: (account.balance - buy.calc) < 0,
      isRent: sell.qtde > 0 && sell.isRent,
      isBuy: buy.qtde > 0,
      isSell: sell.qtde > 0 || sell.qtde < 0,
      status: 'executada',
      dataAndHour: currentDate(),
    };

    if (name === 'confirm') {
      dispatch(addExecutedOrder(order));
      if (buy.qtde > 0) {
        dispatch(decrementBalance(order));
      }
      if (sell.qtde > 0 && sell.isRent) {
        dispatch(incrementBalanceRent(order));
      }
      if (sell.qtde > 0) {
        dispatch(incrementBalance(order));
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
    <Style.BuyAndSellContainer>
      <Style.FinancialOrderValue>
        <p>
          Financeiro da ordem:
          {' '}
          <span>{buy.calc > 0 ? buy.calc : sell.calc}</span>
        </p>
      </Style.FinancialOrderValue>
      <Style.FinancialOrderMain>
        <div>
          <ul>
            <li>
              Lote:
              <span id="l">
                {' '}
                { orderType(buy.qtde > 0 ? buy.qtde : sell.qtde) }
              </span>
            </li>
            <li>
              Operação alavancada:
              <span id="a">
                {' '}
                { (account.balance - buy.calc) < 0 && buy.qtde > 0 ? 'sim' : 'não' }
              </span>
            </li>
            { sell.qtde > 0 && sell.isRent
              && (
              <li>
                Tomar aluguel (BTC):
                {' '}
                <span>sim</span>
              </li>
              ) }
          </ul>
        </div>
        <form>
          <Style.BuyAndSellInput>
            <Buy />
            <Sell />
          </Style.BuyAndSellInput>
          <Style.BuyAndSellButtons>
            <Input
              title=""
              id="ass-eletronica"
              type="text"
              name="ass-eletronica"
              value={electronicPassword.pass}
              placeholder="Assinatura eletrônica"
              onChange={handleChange}
              disabled={false}
              max={10000}
            />
            <div>
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
            </div>
          </Style.BuyAndSellButtons>
        </form>
      </Style.FinancialOrderMain>
    </Style.BuyAndSellContainer>
  );
}

export default BuyAndSell;
