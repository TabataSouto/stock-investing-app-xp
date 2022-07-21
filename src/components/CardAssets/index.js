import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stockToBeTraded } from '../../redux/reducers/negotiation';
import Button from '../Button';
import Style from './Style';

function CardAssets({ title, assets }) {
  const unitAsset = useSelector((state) => state.assets.list);
  const navigate = useNavigate();
  const dispathc = useDispatch();

  const handleClick = ({ target: { name } }) => {
    navigate(`/negotiation/${name}`);
    dispathc(stockToBeTraded(unitAsset.filter((asset) => asset.paper === name)));
  };

  return (
    <section>
      <h3>{title}</h3>
      <Style.Div>
        <p>Ação</p>
        <p>Qtde</p>
        <p>Valor (R$)</p>
        <p>Negociar</p>
      </Style.Div>
      <main>
        { assets.length > 0 && assets.map(({
          paper, quantity, amount,
        }) => (
          <Style.Div key={paper}>
            <p>{paper}</p>
            <p>{quantity}</p>
            <p>{amount.toFixed(2)}</p>
            <Button
              name={paper}
              disabled={false}
              onClick={handleClick}
              title="C"
            />
            <Button
              name={paper}
              disabled={false}
              onClick={handleClick}
              title="V"
            />
          </Style.Div>
        )) }
      </main>
    </section>
  );
}

CardAssets.propTypes = {
  title: PropTypes.string.isRequired,
  assets: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CardAssets;