import React from 'react';
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

export default PlayerRow
