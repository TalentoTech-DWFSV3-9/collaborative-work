// src/components/ProgressBar.jsx
import PropTypes from "prop-types";

const ProgressBar = ({ completion }) => {
  return (
    <div>
      <h3>Progreso del Perfil</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${completion}%`, backgroundColor: "green" }}></div>
      </div>
      <p>{completion}% Completado</p>
    </div>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  completion: PropTypes.number.isRequired,
};
