import React from 'react';
import PropTypes from 'prop-types';
import './RocketCard.css';

const RocketCard = ({ rocket }) => (
  <div className='rocketDiv'>
    <img src={rocket.flickr_images} alt={rocket.rocket_name + rocket.id} className='rocketImage'/>
    <div className='rocketInfo'>
      <h3>{rocket.rocket_name}</h3>
      <p>{rocket.description}</p>
      <button type="button" className='rocketBtn'>Reserve Rocket</button>
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
