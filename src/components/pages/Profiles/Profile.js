import { useSelector } from 'react-redux';
import MissionProfileCard from './MissionProfileCard';
import RocketProfileCard from './RocketProfileCard';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missions);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="profile">
      <div className="container">
        <h2>My Rockets</h2>
        <RocketProfileCard reservedRockets={reservedRockets} id="exht" />
      </div>
      <div className="container">
        <h2>My Missions</h2>
        <MissionProfileCard joinedMissions={joinedMissions} id="exht" />
      </div>
    </div>
  );
};

export default Profile;
