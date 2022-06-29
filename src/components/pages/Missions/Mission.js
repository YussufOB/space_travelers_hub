import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../../redux/missions/missionsReducer';
import MissionCard from './MissionCard';
import './MissionCard.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      <table>
        <thead>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Nill</th>
        </thead>
        <tbody>
          {
            missions.map((mission) => (
              <MissionCard key={mission.mission_id} mission={mission} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
