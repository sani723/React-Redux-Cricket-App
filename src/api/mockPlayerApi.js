import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const players = [
  {"id": 1, "teamId": "PAK", "name": "Sarfraz Ahmed", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 2, "teamId": "PAK", "name": "Azhar Ali", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 3, "teamId": "PAK", "name": "Shoaib Malik", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 4, "teamId": "PAK", "name": "Umer Akmal", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 5, "teamId": "PAK", "name": "Wahab Riaz", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 6, "teamId": "PAK", "name": "Hassan Ali", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 7, "teamId": "PAK", "name": "Muhammad Amir", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 8, "teamId": "PAK", "name": "Yasir Ali", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 9, "teamId": "IND", "name": "Virat Kohli", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263600/263697.20.jpg"   },
  {"id": 10, "teamId": "IND", "name": "Axar Patel", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/205200/205285.1.jpg"   },
  {"id": 12, "teamId": "IND", "name": "Mohammed Shami", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263708.1.jpg"   },
  {"id": 13, "teamId": "IND", "name": "Rohit Sharma", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/222900/222915.jpg"   },
  {"id": 14, "teamId": "IND", "name": "MS Dhoni", "role": "Wicketkeeper", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263705.20.jpg"   },
  {"id": 15, "teamId": "IND", "name": "Jayant Yadav", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/152800/152835.jpg"   },
  {"id": 16, "teamId": "IND", "name": "Lokesh Rahul", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/250200/250209.1.jpg"   },
  {"id": 17, "teamId": "IND", "name": "Jasprit Bumrah", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263704.1.jpg"   },
  {"id": 18, "teamId": "ENG", "name": "Joe Root", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 19, "teamId": "ENG", "name": "Alaister Cook", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 20, "teamId": "ENG", "name": "Jason Roy", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 21, "teamId": "ENG", "name": "Sam Bilings", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 22, "teamId": "ENG", "name": "Joss Butler", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 23, "teamId": "ENG", "name": "Liam Plunket", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 24, "teamId": "ENG", "name": "Sturat Broad", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 25, "teamId": "ENG", "name": "James Anderson", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 26, "teamId": "ENG", "name": "Moeen Ali", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 27, "teamId": "ENG", "name": "Rashid Khan", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 28, "teamId": "ENG", "name": "Nasir Hussain", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 29, "teamId": "ENG", "name": "Alex Stewart", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 30, "teamId": "ENG", "name": "Nick Night", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 31, "teamId": "ENG", "name": "Andrew Caddick", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.2.jpg"   },
  {"id": 32, "teamId": "IND", "name": "Ravichandran Ashwin", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263703.17.jpg"   },
  {"id": 33, "teamId": "IND", "name": "Shikhar Dhawan", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263700.20.jpg"   },
  {"id": 34, "teamId": "IND", "name": "Kedar Jadhav", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263706.1.jpg"   },
  {"id": 35, "teamId": "IND", "name": "Kuldeep Yadav", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/179400/179447.1.jpg"   },
  {"id": 36, "teamId": "IND", "name": "Abhinav Mukund", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/174100/174163.jpg"   },
  {"id": 37, "teamId": "IND", "name": "Manish Pandey", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/184200/184251.1.jpg"   },
  {"id": 38, "teamId": "IND", "name": "Dinesh Karthik", "role": "Wicketkeeper", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263600/263696.1.jpg"   },
  {"id": 39, "teamId": "IND", "name": "Bhuvneshwar Kumar", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263600/263695.1.jpg"   },
  {"id": 40, "teamId": "IND", "name": "Karun Nair", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/222600/222699.5.jpg"   },
  {"id": 41, "teamId": "IND", "name": "Hardik Pandya", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263702.1.jpg"   },
  {"id": 42, "teamId": "IND", "name": "Cheteshwar Pujara", "role": "Allrounder", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/252100/252151.jpg"   },
  {"id": 43, "teamId": "IND", "name": "Wriddhiman Saha", "role": "Wicketkeeper", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/141700/141725.3.jpg"   },
  {"id": 44, "teamId": "IND", "name": "Shardul Thakur", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/153500/153525.1.jpg"   },
  {"id": 45, "teamId": "IND", "name": "Umesh Yadav", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263600/263699.1.jpg"   },
  {"id": 46, "teamId": "IND", "name": "Yuzvendra Chahal", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/152900/152991.jpg"   },
  {"id": 47, "teamId": "IND", "name": "Ravindra Jadeja", "role": "Allrounder", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263700/263701.21.jpg"   },
  {"id": 48, "teamId": "IND", "name": "Ashish Nehra", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/128400/128480.1.jpg"   },
  {"id": 49, "teamId": "IND", "name": "Rishabh Pant", "role": "Wicketkeeper", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/233200/233209.5.jpg"   },
  {"id": 50, "teamId": "IND", "name": "Ajinkya Rahane", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/263600/263694.1.jpg"   },
  {"id": 51, "teamId": "IND", "name": "Ishant Sharma", "role": "Bowler", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/202700/202759.1.jpg"   },
  {"id": 52, "teamId": "IND", "name": "Murali Vijay", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/202700/202761.1.jpg"   },
  {"id": 53, "teamId": "IND", "name": "Yuvraj Singh", "role": "Batsman", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/202600/202671.1.jpg"   },
  {"id": 54, "teamId": "AFG", "name": "Afsar Zazai", "role": "Wicketkeeper", "status": true, "picture": "http://p.imgci.com/db/PICTURES/CMS/262400/262425.1.jpg"   }


];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

class PlayerApi {

  static getAllPlayers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], players));
      }, delay);
    });
  }

  static getTeamPlayers(teamID) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const filteredPlayers = Object.keys(players).filter( function(key) {
          return players[key]["teamId"] === teamID;
        }).map(function(key) {
            return players[key];
        });

        resolve(filteredPlayers);
      }, delay);
    });
  }



}

export default PlayerApi;
