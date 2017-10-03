import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlayerRow from '../../ui/players/PlayerRow';
import { connect } from 'react-redux';
import store from '../../../store/';
import { loadFilteredPlayers } from '../../../store/playerActions';
import './players.css';



class Players extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tid: props.match.params.tid
    };
  }

  componentDidMount() {
    store.dispatch( loadFilteredPlayers(this.state.tid) );
  }

  render() {
    const { players } = this.props;
    return (
      <div className="row player-list">
        {players.length === 0 && <h2>No player in the system</h2>}
        {players.length > 0 &&
          players.map( (player, i) =>
            <PlayerRow key={i} {...player} />
          )
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  players: state.players
});

Players.propTypes = {
  players: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Players);
