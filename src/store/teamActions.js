import ActionTypes from './utils/ActionTypes';
import TeamAPI from '../api/mockTeamApi';

export const addTeam = (id, title, status=true, logo='' ) => {

  // Add any application logic here e.g.
  title = title.toUpperCase();

  return {
    type: ActionTypes.ADD_TEAM,
    payload: {
      id,
      title,
      status,
      logo
    }
  }
}


export const loadTeams = () => (dispatch, getState) => {

  TeamAPI.getAllTeams().then(teams => {
    dispatch ({
      type: ActionTypes.FETCH_TEAM,
      payload: teams
    });
  });
  
}
