import React from 'react';
import PropTypes from 'prop-types';
import './MissionCard.css';

const MissionCard = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td className="memberRow"><button type="button">Not a member</button></td>
    <td className="joinRow"><button type="button">Join Mission</button></td>
  </tr>
);

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default MissionCard;
