import PropTypes from "prop-types";

export const TaskCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string,
  progress: PropTypes.number,
};
