import ActionTypes from './utils/ActionTypes';

export const players = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.ADD_PLAYER:
      return action.payload;
    case ActionTypes.FETCH_PLAYERS:
      return action.payload;
    default:
      return state;
  }

}
