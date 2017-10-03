import React from 'react';
import { Link } from 'react-router-dom';
import TiArrowForwardOutline from 'react-icons/lib/ti/arrow-forward-outline';

const TeamRow = (props) =>
    <div className="col-xs-12 col-md-4">
      <Link to={"/players/" + props.id}>
        <div className="team">
          <div className="team-logo text-center">
  				  <img src={props.logo} alt={props.title} />
  				</div>
          <div className="team-info">
  					<h4>{props.title}</h4>
  					<span>{props.id}</span>
            <TiArrowForwardOutline className="team-info-icon" />
  				</div>
        </div>
      </Link>
    </div>

export default TeamRow
