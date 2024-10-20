import React from "react";
import PropTypes from "prop-types";

const ActivityLog = ({ activities }) => {
  return (
    <ul>
      {activities.slice(0, 10).map((activity, index) => (
        <li key={index}>{activity}</li>
      ))}
    </ul>
  );
};

ActivityLog.propTypes = {
  activities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ActivityLog;
