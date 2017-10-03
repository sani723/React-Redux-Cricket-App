import ActionTypes from '../store/utils/ActionTypes';
import * as reducer from '../store/teamReducer';

const teamData = [
  {"id": "AFG", "title": "Afghanistan", "status": true, "logo": "http://a.espncdn.com/50" }
];

describe("Team Reducer", () =>{
  it("has a default state", () => {
    expect( reducer.teams(undefined, {type: 'unexpected'}) ).toEqual([]);
  }),
  it("should handle FETCH_TEAM", () => {
    expect( reducer.teams(undefined,
      {
        payload: teamData,
        type: ActionTypes.FETCH_TEAM
      }
     )
   ).toEqual(teamData)
  });
});
