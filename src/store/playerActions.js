import ActionTypes from './utils/ActionTypes';
import PlayerAPI from '../api/mockPlayerApi';

export const addPlayer = (id, teamId, name, role, status=true, picture ) => {

  return {
    type: ActionTypes.ADD_PLAYER,
    payload: {
      id,
      teamId,
      name,
      role,
      status,
      picture
    }
  }
}

export const loadFilteredPlayers = (teamID) => (dispatch, getState) => {
  PlayerAPI.getTeamPlayers(teamID).then(players => {
    dispatch ({
      type: ActionTypes.FETCH_PLAYERS,
      payload: players
    });
  });
}
