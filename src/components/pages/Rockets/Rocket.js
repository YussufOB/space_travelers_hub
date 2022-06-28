import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchRockets } from '../../../redux/rockets/rocketsReducer';
import RocketCard from './RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      <h2>ROCKETS</h2>
      {
        rockets.map((rocket) => (
          <RocketCard key={rocket.id} rocket={rocket} />
        ))
      }
    </div>
  );
};

export default Rockets;
