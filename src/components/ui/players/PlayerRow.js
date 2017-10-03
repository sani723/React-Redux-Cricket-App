import React from 'react';
import PropTypes from 'prop-types';
import MdInfoOutline from 'react-icons/lib/ti/info-large';

const PlayerRow = ({ id, teamId, name, role, status, picture }) =>
    <div className="col-xs-12 col-md-6 player">
        <div className="row">
          <div className="col-xs-4 player-picture">
              <img src={picture} alt={name} />
          </div>
          <div className="col-xs-8 player-info">
            <h4>{name}</h4>
    				<span>{role}</span>
          </div>
          <MdInfoOutline className="player-info-icon" />
        </div>
    </div>

PlayerRow.defaultProps = {
  status: true,
  picture: "http://e2.365dm.com/17/06/150x150/skysports-pink-ball-county-cricket_3986917.jpg"
}

PlayerRow.propTypes = {
  id: PropTypes.number.isRequired,
  teamId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role:  PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  picture: PropTypes.string.isRequired,
};

export default PlayerRow
