import ActionTypes from './utils/ActionTypes';

export const teams = (state=[], action) => {

  switch(action.type) {
    case ActionTypes.ADD_TEAM:
      return action.payload;
    case ActionTypes.FETCH_TEAM:
      return action.payload;
    case ActionTypes.CANCEL_FETCHING:
      return action.payload;
    default:
      return state;
  }

}
