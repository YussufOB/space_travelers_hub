import React from 'react';
import PropTypes from 'prop-types';

const MissionProfileCard = ({ joinedMissions }) => (
  <table>
    <tbody>
      {
        joinedMissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

MissionProfileCard.propTypes = {
  joinedMissions: PropTypes.shape({
    mission_id: PropTypes.string,
    map: PropTypes.func,
    mission_name: PropTypes.string,
  }).isRequired,
};

export default MissionProfileCard;
