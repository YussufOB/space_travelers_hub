import React from 'react';
import PropTypes from 'prop-types';

const RocketCard = ({ rocket }) => (
  <div>
    <img src={rocket.flickr_images} alt={rocket.rocket_name + rocket.id} />
    <div>
      <h3>{rocket.rocket_name}</h3>
      <p>{rocket.description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

RocketCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default RocketCard;
