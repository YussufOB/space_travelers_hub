import axios from 'axios';

const GET_ROCKETS = 'GET_ROCKETS';
const API = 'https://api.spacexdata.com/v3/rockets';

const getRockets = (payload) => ({ type: GET_ROCKETS, payload });

export const fetchRockets = () => async (dispatch) => {
  const response = await axios.get(API);
  const data = await response.data;
  const rocketList = [];

  data.forEach((rocket) => {
    rocketList.push({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
    });
  });
  dispatch(getRockets(rocketList));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
