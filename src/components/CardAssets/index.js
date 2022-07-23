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
    <Style.TableContainer>
      <h3>{title}</h3>
      <Style.TableCardAssets>
        <Style.TheadCardAssets>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
        </Style.TheadCardAssets>
        <Style.TbodyCardAssets>
          { assets.length > 0 && assets.map(({
            paper, quantity, amount,
          }) => (
            <tr key={paper}>
              <td>{paper}</td>
              <td>{quantity}</td>
              <td>{amount}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </Style.TbodyCardAssets>
      </Style.TableCardAssets>
    </Style.TableContainer>
  );
}

CardAssets.propTypes = {
  title: PropTypes.string.isRequired,
  assets: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default CardAssets;
