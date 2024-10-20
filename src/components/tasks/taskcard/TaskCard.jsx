import { useState } from "react";
import { format } from "date-fns";
import { TaskCardPropTypes } from "./TaskCard.proptypes";

const TaskCard = ({ title, description, dueDate, progress = 0 }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  // Asegúrate de usar una de las soluciones sugeridas
  const taskDate = new Date(`${dueDate}T00:00:00`); // O usa Date.UTC

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "300px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      {dueDate && (
        <p>
          <strong>Due Date:</strong> {format(taskDate, "dd/MM/yyyy")}
        </p>
      )}

      {!isCompleted && (
        <>
          <div style={{ marginBottom: "8px" }}>
            <label>Progress: {progress}%</label>
            <progress value={progress} max="100" style={{ width: "100%" }}></progress>
          </div>
          <button onClick={handleComplete}>Mark as Completed</button>
        </>
      )}

      {isCompleted && <p style={{ color: "green", fontWeight: "bold" }}>Task Completed!</p>}
    </div>
  );
};

TaskCard.propTypes = TaskCardPropTypes;

export default TaskCard;
