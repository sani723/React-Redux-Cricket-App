import React, {Component} from 'react';
import TeamRow from '../../ui/teams/TeamRow'
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadTeams } from '../../../store/teamActions';
import './teams.css';

class Teams extends Component {

  constructor(props) {
    super(props);
    store.dispatch( loadTeams() );
  }

  render() {
    return (
      <div className="row team-list">
        {
          this.props.teams.map( (team, i) => <TeamRow key={i} {...team} /> )
        }
      </div>
    );
  }

}

const mapStateToProps = state => (
  {
    teams: state.teams
  }
);

export default connect(mapStateToProps)(Teams);
