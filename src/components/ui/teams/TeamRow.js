import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

TeamRow.defaultProps = {
  status: true
}

TeamRow.propTypes = {
  id: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired
};

export default TeamRow
