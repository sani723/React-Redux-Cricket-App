import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TeamRow from '../../ui/teams/TeamRow'
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadTeams } from '../../../store/teamActions';
import './teams.css';

class Teams extends Component {

  componentDidMount() {
    store.dispatch( loadTeams() );
  }

  render() {
    const { teams } = this.props;
    return (
      <div className="row team-list">
        { teams.map( (team, i) => <TeamRow key={i} {...team} /> ) }
      </div>
    );
  }

}

const mapStateToProps = state => (
  {
    teams: state.teams
  }
);

Teams.propTypes = {
  teams: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Teams);
