import React from 'react';
import PropTypes from 'prop-types';

const RocketProfileCard = ({ reservedRockets }) => (
  <table>
    <tbody>
      {
        reservedRockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.rocket_name}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

RocketProfileCard.propTypes = {
  reservedRockets: PropTypes.shape({
    id: PropTypes.string,
    map: PropTypes.func,
    rocket_name: PropTypes.string,
  }).isRequired,
};

export default RocketProfileCard;
