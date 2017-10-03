import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const teams = [
  {"id": "AFG", "title": "Afghanistan", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/40.png&h=150&w=150" },
  {"id": "AUS", "title": "Australia", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/2.png&h=150&w=150" },
  {"id": "BAN", "title": "Bangladesh", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/25.png&h=150&w=150" },
  {"id": "IND", "title": "India", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/6.png&h=150&w=150" },
  {"id": "WES", "title": "West Indies", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/4.png&h=150&w=150" },
  {"id": "PAK", "title": "Pakistan", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/7.png&h=150&w=150" },
  {"id": "SOU", "title": "South Africa", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/3.png&h=150&w=150"},
  {"id": "SRI", "title": "Srilanka", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/8.png&h=150&w=150" },
  {"id": "ENG", "title": "England", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/1.png&h=150&w=150"},
  {"id": "NEW", "title": "New Zealand", "status": true, "logo": "http://a.espncdn.com/combiner/i?img=/i/teamlogos/cricket/500/5.png&h=150&w=150"}
];

//This would be performed on the server in a real app.
const generateId = team => {
  return team.title.substring(0, 3).toUpperCase();
};

class TeamApi {
  static getAllTeams() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], teams));
      }, delay);
    });
  }

  static saveTeam(team) {
	 team = Object.assign({}, team);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTeamNameLength = 7;
        if (team.title.length < minTeamNameLength) {
          reject(`Team Name must be at least ${minTeamNameLength} characters.`);
        }

        if (team.id) {
          const existingTeamIndex = teams.findIndex(a => a.id === team.id);
          teams.splice(existingTeamIndex, 1, team);
        } else {
          team.id = generateId(team);
          teams.push(team);
        }

        resolve(team);
      }, delay);
    });
  }

}

export default TeamApi;
