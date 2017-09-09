import React from 'react';
import PropTypes from 'prop-types';

const PersonPage = (props) => {

  return (
    <div>
      <div>todo person id = {props.match.params.id} area -- get user data displayed here</div>
    </div>
  );
};

PersonPage.PropTypes = {
  match: PropTypes.object.isRequired
};

export default PersonPage;
