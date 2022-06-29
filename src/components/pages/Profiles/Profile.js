import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import MissionProfileCard from './MissionProfileCard';
import RocketProfileCard from './RocketProfileCard';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div>
      <div>
        <h2>My Rockets</h2>
        <RocketProfileCard reservedRockets={reservedRockets} />
      </div>
      <div>
        <h2>My Missions</h2>
        <MissionProfileCard joinedMissions={joinedMissions} />
      </div>
    </div>
  );
};

export default Profile;
